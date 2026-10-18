// Tipos e interfaces para o projeto Aurora

export type AuroraStatus = 'online' | 'maintenance' | 'draft' | 'locked';

export type AuroraId =
  | 'aurora-00' | 'aurora-01' | 'aurora-02' | 'aurora-03' | 'aurora-04' | 'aurora-05' | 'aurora-06' | 'aurora-07' | 'aurora-08' | 'aurora-09'
  | 'aurora-10' | 'aurora-11' | 'aurora-12' | 'aurora-13' | 'aurora-14' | 'aurora-15' | 'aurora-16' | 'aurora-17' | 'aurora-18' | 'aurora-19'
  | 'aurora-20' | 'aurora-21' | 'aurora-22' | 'aurora-23' | 'aurora-24' | 'aurora-25' | 'aurora-26' | 'aurora-27' | 'aurora-28' | 'aurora-29'
  | 'aurora-30' | 'aurora-31' | 'aurora-32' | 'aurora-33' | 'aurora-34' | 'aurora-35' | 'aurora-36' | 'aurora-37' | 'aurora-38' | 'aurora-39'
  | 'aurora-40' | 'aurora-41' | 'aurora-42' | 'aurora-43' | 'aurora-44' | 'aurora-45' | 'aurora-46' | 'aurora-47';

export interface AuroraRouteConfig {
  id: AuroraId;
  name: string;
  path: string;
  status: AuroraStatus;
  requiresAuth: boolean;
  bypassKey?: string;
}
