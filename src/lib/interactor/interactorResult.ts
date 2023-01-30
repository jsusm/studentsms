export const InteractorErrorTypes = [
  "notFound",
  "notAllowed",
  "unauthorized",
] as const

export class InteractorError extends Error {
  type: typeof InteractorErrorTypes[number]
  constructor(message: string, type: typeof InteractorErrorTypes[number]){
    super(message)
    this.type = type
  }
}

export interface InteractionSuccess<Output> {
  success: true,
  data: Output
}

export interface InteractionError {
  success: false,
  error: InteractorError
}

export type InteractorResult<Output> = InteractionSuccess<Output> | InteractionError
