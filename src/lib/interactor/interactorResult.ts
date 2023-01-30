export const InteractorErrorTypes = [
  "notFound",
  "notAllowed",
  "unauthorized",
] as const

export interface InteractorError extends Error {
  type: typeof InteractorErrorTypes[number]
}

export interface InteractionSuccess<Output> {
  success: true,
  data: Output
}

export interface InteractionError {
  success: false,
  error: InteractorError
}

export type InteractorResult<Output> = InteractionSuccess<Output> | InteractorError 
