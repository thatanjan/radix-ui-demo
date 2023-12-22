'use client'
import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card'
import '../styles/HoverCard.css'

const HoverCardDemo = () => (
	<HoverCard.Root>
		<HoverCard.Trigger asChild>
			<button>Click me</button>
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content className='HoverCardContent' sideOffset={5}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
						<img
							src='https://www.nastol.com.ua/pic/202007/1280x1024/nastol.com.ua-411306.jpg'
							height={200}
							width='100%'
							alt=''
						/>
						<div className='Text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
							provident corrupti pariatur nostrum illo fuga enim ea dolor non
							veniam!
						</div>
					</div>
				</div>

				<HoverCard.Arrow className='HoverCardArrow' />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
)

export default HoverCardDemo
