import {z} from 'zod'

const mailFormSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    message: z.string().min(10, "Message is required"),
})

export default mailFormSchema