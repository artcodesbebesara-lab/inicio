import { NextRequest, NextResponse } from 'next/server';
import { AURORA_REGISTRY } from './config/auroras.registry';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  const match = pathname.match(/^\/(aurora-\d{2})(?:\/|$)/);
  if (!match) return NextResponse.next();

  const auroraId = match[1];
  const config = (AURORA_REGISTRY as any)[auroraId];
  if (!config) return NextResponse.next();

  // Bypass por chave
  const queryKey = url.searchParams.get('key');
  if (config.bypassKey && queryKey === config.bypassKey) return NextResponse.next();

  if (config.status === 'maintenance') {
    url.pathname = '/manutencao';
    return NextResponse.rewrite(url);
  }

  const isFakeAuthenticated = req.cookies.get('aurora_mock_session')?.value === 'true';
  if (config.requiresAuth && !isFakeAuthenticated) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
