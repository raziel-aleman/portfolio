"use server";

import ContactFormEmail from "@/email/ContactFormEmail";
import { getErrorMEssage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "razielali10@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMEssage(error),
        };
    }

    return { data };
};
