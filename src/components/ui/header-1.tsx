'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import { trackEvent } from '@/lib/analytics';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [openDropdown, setOpenDropdown] = React.useState(false);
	const scrolled = useScroll(10);
	const router = useRouter();
	const dropdownRef = React.useRef<HTMLDivElement>(null);

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

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setOpenDropdown(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

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
					<span className="text-2xl font-normal tracking-tight text-white">Velricon</span>
				</Link>

				<div className="hidden items-center gap-2 md:flex">
					{/* Services Dropdown */}
					<div
						ref={dropdownRef}
						className="relative"
						onMouseEnter={() => setOpenDropdown(true)}
						onMouseLeave={() => setOpenDropdown(false)}
					>
						<button
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								'text-platinum hover:text-white'
							)}
							aria-expanded={openDropdown}
							aria-haspopup="true"
						>
							Services
						</button>
						{openDropdown && (
							<div className="absolute top-full left-0 mt-2 w-64 bg-elevation-layer rounded-2xl border border-surface-border shadow-xl p-2">
								{/* First Section - Bold */}
								<div className="px-4 py-2">
									{servicesLinks.primary.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={() => {
												trackEvent('nav_service_click', { service: link.label });
												setOpenDropdown(false);
											}}
											className="block px-4 py-3 rounded-xl text-white hover:bg-deep-void transition-colors font-medium tracking-tight"
										>
											{link.label}
										</Link>
									))}
								</div>
								{/* Divider */}
								<div className="border-t border-surface-border my-1" />
								{/* Second Section - Normal */}
								<div className="px-4 py-2">
									{servicesLinks.secondary.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={() => {
												trackEvent('nav_service_click', { service: link.label });
												setOpenDropdown(false);
											}}
											className="block px-4 py-3 rounded-xl text-platinum hover:text-white hover:bg-deep-void transition-colors font-normal tracking-tight"
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						)}
					</div>

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

