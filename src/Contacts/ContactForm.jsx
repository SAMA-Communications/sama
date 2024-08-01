import React from 'react'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../components/Button'
import './style.module.css'
function ContactForm() {
	const form = useRef()

	const sendEmail = () => {
		emailjs
			.sendForm('gmail', 'template_uwtof5i', form.current, {
				publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
			})
			.then(
				() => {
					console.log('SUCCESS!')
				},
				error => {
					console.log('FAILED...', error.text)
				}
			)
	}

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	})
	const onSubmit = data => {
		// console.log(data)
		sendEmail()
		reset()
	}
	return (
		<div className=" bg-[#352E57] sm:w-[560px] min-h-[652px] rounded-[40px]">
			<div className=" m-10 flex flex-col gap-8">
				<h4
					className=" font-oxanium sx:text-2xl text-xl
				 leading-6"
				>
					Send a message
				</h4>

				<form
					ref={form}
					onSubmit={handleSubmit(onSubmit)}
					className=" flex flex-col gap-6 text-xl leading-[30px] font-sofiaSans"
				>
					<div>
						<input
							placeholder="Full name*"
							type="text"
							{...register('fullName', {
								required: 'Field is required',
								minLength: {
									value: 3,
									message: 'The minimum length of a nickname is 3 characters',
								},
								maxLength: {
									value: 30,
									message: 'The maximum length of a name is 30 characters',
								},
							})}
							className=" bg-[#585274] border border-transparent  focus:border-[#958CF8] outline-none rounded-[16px] h-[60px] w-full px-6 py-[15px] "
						/>
						{errors?.fullName && (
							<div className=" sm:ml-6 mt-4 font-oxanium text-rose-600">
								<p> {errors?.fullName?.message || 'Error'} </p>
							</div>
						)}
					</div>
					<div>
						<input
							placeholder="Email*"
							type="email"
							{...register('email', {
								required: 'Field is required',
								pattern: {
									value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
									message: 'Your email must be valid',
								},
							})}
							className=" bg-[#585274] border border-transparent  focus:border-[#958CF8] outline-none rounded-[16px] h-[60px] w-full px-6 py-[15px]"
						/>
						{errors?.email && (
							<div className=" sm:ml-6 mt-4 font-oxanium text-rose-600">
								<p> {errors?.email?.message || 'Error'} </p>
							</div>
						)}
					</div>
					<input
						placeholder="Subject"
						type="text"
						{...register('subject')}
						className=" bg-[#585274] border border-transparent  focus:border-[#958CF8] outline-none rounded-[16px] h-[60px] w-full px-6 py-[15px]"
					/>
					<div>
						<textarea
							placeholder="Tell us more about your project*"
							className=" resize-none bg-[#585274] border border-transparent  focus:border-[#958CF8] outline-none rounded-[16px] h-[200px] w-full px-6 py-[15px]"
							{...register('body', {
								required: 'Field is required',
								minLength: {
									value: 3,
									message: 'The minimum length of your story is 20 characters',
								},
								maxLength: {
									value: 300,
									message: 'The maximum length of your story is 300 characters',
								},
							})}
						></textarea>
						{errors?.body && (
							<div className=" sm:ml-6 mt-4 font-oxanium text-rose-600">
								<p> {errors?.body?.message || 'Error'} </p>
							</div>
						)}
					</div>

					<Button
						type="submit"
						disabled={!isValid}
						className={'px-6 py-[10px] text-base '}
					>
						Send message
					</Button>
				</form>
			</div>
		</div>
	)
}

export default ContactForm
