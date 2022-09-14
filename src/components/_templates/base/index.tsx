export interface BaseTemplateProps {
  sampleTextProp: string
}

export const BaseTemplate = ({ sampleTextProp }: BaseTemplateProps) => {
  return (
    <div className='flex bg-gradient-to-r from-teal-300 to-blue-500'>
      {sampleTextProp}
    </div>
  )
}
