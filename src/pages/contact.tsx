import { PrimaryLayout } from '../components/layouts/primary'
import { NextPageWithLayout } from './page'
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Input } from '../components/common/inputs/Input'
import {
  FaUserTie,
  FaEye,
  FaEyeSlash,
  FaAt,
  FaRegAddressCard,
  FaCity,
} from 'react-icons/fa'

const testFormSchema = zod.object({
  name: zod.string().min(1, { message: 'Name is required' }),
  age: zod.number().min(1, { message: 'Age is required' }),
  password: zod.string().min(1, { message: 'Password is required' }),
  city: zod.string().min(1, { message: 'City is required' }),
  email: zod
    .string()
    .min(1, { message: 'E-mail is required' })
    .email({ message: 'Invalid e-mail format' }),
})
export type TestFormProps = zod.infer<typeof testFormSchema>

const Contact: NextPageWithLayout = () => {
  const formContextData = useForm<TestFormProps>({
    resolver: zodResolver(testFormSchema),
    defaultValues: { age: 0 },
    shouldUseNativeValidation: true,
  })
  const formWithError: SubmitErrorHandler<TestFormProps> = (data) => {
    console.log('form with error')
    console.log(data)
  }
  const handleFormSubmit: SubmitHandler<TestFormProps> = async (formData) => {
    console.log('Form submitted')
    console.log(formData)
  }

  return (
    <main className='flex w-full flex-1 flex-col gap-5 p-4'>
      <h2>Layout Example (Contact)</h2>
      <FormProvider {...formContextData}>
        <form
          onSubmit={formContextData.handleSubmit(
            handleFormSubmit,
            formWithError,
          )}
          className='flex w-full flex-col gap-4 rounded-xl border bg-gray-50 p-8 shadow-lg'
        >
          <Input
            label='Default'
            //inputProps={{ bgColor: 'bg-gray-50' }}
            labelProps={{ bgColor: 'bg-gray-50' }}
            {...formContextData.register('name')}
            helperText={formContextData.formState.errors.name?.message}
          />
          <Input
            label='Number'
            type='number'
            labelProps={{ bgColor: 'bg-gray-50' }}
            iconProps={{
              leftIcon: <FaUserTie />,
              leftIconColor: 'text-app-success',
            }}
            {...formContextData.register('age', { valueAsNumber: true })}
            helperText={formContextData.formState.errors.age?.message}
          />
          <Input
            label='Password'
            type='password'
            labelProps={{ bgColor: 'bg-gray-50' }}
            iconProps={{
              hasPasswordToggle: true,
              rightIcon: <FaEye />,
              rightIconColor: 'text-app-primary',
              rightIconHidePass: <FaEyeSlash />,
            }}
            {...formContextData.register('password')}
            helperText={formContextData.formState.errors.password?.message}
          />
          <Input
            label='City'
            labelProps={{ bgColor: 'bg-gray-50' }}
            iconProps={{
              leftIcon: <FaRegAddressCard />,
              leftIconColor: 'text-app-tertiary',
              rightIcon: <FaCity />,
              rightIconColor: 'text-app-info',
            }}
            {...formContextData.register('city')}
            helperText={formContextData.formState.errors.city?.message}
          />
          <Input
            label='Email'
            type='email'
            labelProps={{ bgColor: 'bg-gray-50' }}
            disabled
            iconProps={{
              leftIcon: <FaAt />,
            }}
            {...formContextData.register('email')}
            helperText={formContextData.formState.errors.email?.message}
          />
          <button type='submit'>Submit</button>
        </form>
      </FormProvider>
    </main>
  )
}

Contact.layout = PrimaryLayout

export default Contact
