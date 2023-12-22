'use client'
import * as Dialog from '@radix-ui/react-dialog'
import '../styles/Dialog.css'
import DemoForm from './DemoForm'

const DialogDemo = () => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className='Button violet'>Edit profile</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className='DialogOverlay' />
			<Dialog.Content className='DialogContent'>
				<Dialog.Title className='DialogTitle'>Edit profile</Dialog.Title>
				<Dialog.Description className='DialogDescription'>
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
				<DemoForm />
				<div
					style={{
						display: 'flex',
						marginTop: 25,
						justifyContent: 'space-between',
					}}
				>
					<Dialog.Close asChild>
						<button className='Close Button' aria-label='Close'>
							Close
						</button>
					</Dialog.Close>
					<Dialog.Close asChild>
						<button className='Button green'>Save changes</button>
					</Dialog.Close>
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
)

export default DialogDemo
