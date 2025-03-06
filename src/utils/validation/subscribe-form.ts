import {z} from 'zod'

const subscribeFormSchema = z.object({
    email: z.string().email("Enter a valid email"),
})

export default subscribeFormSchema