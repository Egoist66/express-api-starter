export type ModuleResponse = {
    [key: string]: Module[]
}

export interface Module {
  created_at: number
  dic: Dict[]
  description: string
  id: string
  moduleName: string
}

export interface Dict {
  id: string
  key: string
  moduleName: string
  translate: string
}
