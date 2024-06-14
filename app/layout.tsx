import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

import DarkIcon from '../public/icons/favicon-dark.svg';
import LightIcon from '../public/icons/favicon-light.svg';

export const metadata = {
	metadataBase: new URL('https://www.pavliuchik.com'),
	alternates: { canonical: '/' },
	generator: 'Next.js',
	applicationName: "Patrick and Kseniia Pavliuchik's Portfolios",
	title: 'Kseniia & Patrick Pavliuchik - Designer & Web Developer',
	description:
		'Discover the portfolios of Patrick Pavliuchik, a web developer specializing in React & Next.js, and Kseniia Pavliuchik, a talented web designer. Explore innovative, user-friendly web solutions and creative designs. Open for collaborative opportunities.',
	keywords: [
		'Patrick Pavliuchik',
		'Kseniia Pavliuchik',
		'Software Developer Germany',
		'Web Developer EU',
		'Web Designer EU',
		'Tech Industry Skills Portfolio',
		'JavaScript Developer',
		'React Developer',
		'Node.js Developer',
		'HTML5 CSS3 Expert',
		'Agile Development Specialist',
		'Responsive Web Design',
		'Full-Stack Developer',
		'Frontend Developer',
		'Backend Developer',
		'Creative Tech Solutions',
		'IT Professional Europe',
		'Hire Tech Talent Germany',
		'Contact Software Engineer',
		'Book Appointment Developer',
		'Web Designer',
		'Graphic Designer',
		'Creative Portfolio',
		'User Experience Designer',
		'UI/UX Designer',
	],
	authors: [{ name: 'Patrick Pavliuchik' }, { name: 'Kseniia Pavliuchik' }],
	creator: 'Patrick Pavliuchik',
	publisher: 'Patrick Pavliuchik',
	category: 'Web Development and Design',
	icons: {
		icon: [
			{
				type: 'image/svg+xml',
				media: '(prefers-color-scheme: light)',
				url: DarkIcon.src,
			},
			{
				type: 'image/svg+xml',
				media: '(prefers-color-scheme: dark)',
				url: LightIcon.src,
			},
		],
	},
	other: {
		'geo.region': 'DE-BE',
		'geo.placename': 'Berlin',
		'geo.position': '52.517037;13.38886',
		ICBM: '52.517037, 13.38886',
	},
};

export default function RootLayout({ children }: { children: any }) {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript />
				<link rel='shortcut icon' href='/favicon.svg' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
				/>
			</head>
			<body>
				<MantineProvider theme={theme}>{children}</MantineProvider>
			</body>
		</html>
	);
}
