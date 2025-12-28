'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import { trackEvent } from '@/lib/analytics';
import { ServicesDropdown } from '@/components/ui/dropdown';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [openDropdown, setOpenDropdown] = React.useState(false);
	const scrolled = useScroll(10);
	const router = useRouter();

	const handleStrategyCallClick = () => {
		trackEvent('strategy_call_click', { location: 'navbar' });
		router.push('/contact');
	};

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);


	const servicesLinks = {
		primary: [
			{ label: 'For Startups', href: '/services/startups' },
			{ label: 'For Scaleups', href: '/services/scaleups' },
			{ label: 'For Established SMEs', href: '/services/smes' },
		],
		secondary: [
			{ label: 'Investor Ready Package', href: '/services/investor-ready' },
			{ label: 'Bank Ready Package', href: '/services/bank-ready' },
		],
	};

	const links = [
		{ label: 'Who we are', href: '/who-we-are' },
		{ label: 'Insights', href: '/insights' },
		{ label: 'Contact', href: '/contact' },
	];

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b border-transparent bg-deep-void transition-all duration-300 ease-out',
				{
					'bg-elevation-layer border-surface-border backdrop-blur-lg':
						scrolled,
				}
			)}
		>
			<nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
					<img
						src="/assets/images/logo.png"
						alt="Velricon"
						className="h-10 w-auto object-contain"
					/>
				</Link>

				<div className="hidden items-center gap-6 md:flex">
					{/* Services Dropdown */}
					<ServicesDropdown
						items={[
							...servicesLinks.primary.map((link, index) => ({
								key: `primary-${index}`,
								label: link.label,
								href: link.href,
							})),
							{
								key: 'divider',
								label: null,
								type: 'divider' as any,
							},
							...servicesLinks.secondary.map((link, index) => ({
								key: `secondary-${index}`,
								label: link.label,
								href: link.href,
							})),
						]}
					>
						<button
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								'text-platinum hover:text-white'
							)}
						>
							Services
						</button>
					</ServicesDropdown>

					{/* Other Links */}
					{links.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className={cn(buttonVariants({ variant: 'ghost' }), 'text-platinum hover:text-white')}
						>
							{link.label}
						</Link>
					))}

					<Button
						variant="outline"
						onClick={handleStrategyCallClick}
						className="border-surface-border text-white hover:bg-elevation-layer hover:text-white bg-transparent"
					>
						Strategy Call
					</Button>
				</div>

				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden border-surface-border text-white hover:bg-elevation-layer bg-transparent"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<MobileMenu open={open} className="flex flex-col justify-between gap-2">
				<div className="grid gap-y-2">
					{/* Services in Mobile */}
					<div className="px-4">
						<button
							className={cn(
								buttonVariants({ variant: 'ghost', className: 'justify-start w-full text-platinum' })
							)}
							onClick={() => setOpenDropdown(!openDropdown)}
						>
							Services
						</button>
						{openDropdown && (
							<div className="pl-4 mt-2 space-y-1">
								{/* First Section - Bold */}
								{servicesLinks.primary.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => {
											trackEvent('nav_service_click', { service: link.label });
											setOpenDropdown(false);
											setOpen(false);
										}}
										className="block px-4 py-2 text-white rounded-lg font-medium"
									>
										{link.label}
									</Link>
								))}
								{/* Divider */}
								<div className="border-t border-surface-border my-1 mx-4" />
								{/* Second Section - Normal */}
								{servicesLinks.secondary.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => {
											trackEvent('nav_service_click', { service: link.label });
											setOpenDropdown(false);
											setOpen(false);
										}}
										className="block px-4 py-2 text-platinum rounded-lg font-normal"
									>
										{link.label}
									</Link>
								))}
							</div>
						)}
					</div>

					{/* Other Links */}
					{links.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className={cn(
								buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-platinum',
								})
							)}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-2 px-4 pb-4">
					<Button
						variant="outline"
						className="w-full bg-transparent border-surface-border text-white hover:bg-elevation-layer"
						onClick={handleStrategyCallClick}
					>
						Strategy Call
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-elevation-layer/95 supports-[backdrop-filter]:bg-elevation-layer/50 backdrop-blur-lg',
				'fixed top-20 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

