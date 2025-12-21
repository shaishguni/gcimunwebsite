'use server'

import { prisma } from "@/lib/prisma"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SubscribeResponse {
    success?: string;
    error?: string;
}

export async function Contact(formData: FormData): Promise<SubscribeResponse> {
    const name = formData.get("name") as string
    const email = formData.get('email') as string
    const message  = formData.get("Message") as string

    if (!email) {
        return { error: 'Email is required' }
    }
    if (!name) {
        return { error: 'Name is required' }
    }

    if (!message ) {
        return { error: 'Message is required' }
    }


    if (!EMAIL_REGEX.test(email)) {
        return { error: 'Invalid email format' }
    }

    try {

        await prisma.contact.create({
            data: {
                name,
                email,
                message
            }
        })

        return { success: 'Successfully contact info submittest!' }
    } catch (error) {
        console.error('Subscription error:', error)
        return { error: 'Failed. Please try again.' }
    }
} 