'use client';

import { Text, Paper, SimpleGrid, Avatar, Button } from '@mantine/core';

import classes from './page.module.css';

export default function HomePage() {
	return (
		<section className={classes.page}>
			<SimpleGrid cols={{ base: 1, sm: 2 }} spacing='xl' mt={50}>
				<Paper radius='md' withBorder p='xl' bg='#242424' component='article'>
					<Avatar
						src='https://media.licdn.com/dms/image/C4D03AQH_0v0Qdw-hwA/profile-displayphoto-shrink_800_800/0/1523611145605?e=1723680000&v=beta&t=AD-QXJUusuykLRjNSy9729k0yyGVF8hebmLcdV9fbVE'
						size={120}
						radius={120}
						mx='auto'
					/>
					<Text ta='center' fz='lg' fw={500} mt='md' c='white'>
						Kseniia Pavliuchik
					</Text>
					<Text ta='center' c='dimmed' fz='sm'>
						Freelance • Product Designer
					</Text>
					<Button variant='outline' fullWidth mt='md' color='grey'>
						<a className={classes.link} href='https://kseniia.pavliuchik.com'>
							Portfolio Website
						</a>
					</Button>
				</Paper>
				<Paper radius='md' withBorder p='xl' bg='#242424' component='article'>
					<Avatar
						src='https://avatars.githubusercontent.com/u/73493957?v=4'
						size={120}
						radius={120}
						mx='auto'
					/>
					<Text ta='center' fz='lg' fw={500} mt='md' c='white'>
						Patrick Pavliuchik
					</Text>
					<Text ta='center' c='dimmed' fz='sm'>
						Full Stack • Web Developer
					</Text>

					<Button variant='outline' fullWidth mt='md' color='grey'>
						<a className={classes.link} href='https://patrick.pavliuchik.com'>
							Portfolio Website
						</a>
					</Button>
				</Paper>
			</SimpleGrid>
		</section>
	);
}
