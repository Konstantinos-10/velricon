'use client';

import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScroll } from '@/components/ui/use-scroll';
import { trackEvent } from '@/lib/analytics';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [openDropdown, setOpenDropdown] = React.useState(false);
	const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
	const [isMounted, setIsMounted] = React.useState(false);
	const servicesDropdownRef = useRef<HTMLDivElement>(null);
	const scrolled = useScroll(10);
	const router = useRouter();
	const pathname = usePathname();

	const handleStrategyCallClick = () => {
		trackEvent('strategy_call_click', { location: 'navbar' });
		router.push('/contact');
	};

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

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
			if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
				setIsServicesDropdownOpen(false);
			}
		};

		if (isServicesDropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isServicesDropdownOpen]);

	// Hide global header on homepage - hero has its own navigation
	if (pathname === '/') {
		return null;
	}

	const servicesLinks = {
		primary: [
			{ label: 'Ongoing Financial Leadership', href: '/services/ongoing-financial-leadership' },
		],
		secondary: [
			{ label: 'Bank Financing & Refinancing', href: '/services/bank-ready' },
			{ label: 'Investor-Ready Packages', href: '/services/investor-ready' },
		],
	};

	const links = [
		{ label: 'Who We Are', href: '/who-we-are' },
		{ label: 'Insights', href: '/insights' },
		{ label: 'Contact', href: '/contact' },
	];

	const mobileMenu = (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={() => setOpen(false)}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
					/>

					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
						className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 md:hidden overflow-y-auto"
						id="mobile-menu"
						style={{
							background: 'linear-gradient(180deg, rgba(14, 16, 26, 0.98) 0%, rgba(10, 12, 18, 0.98) 100%)',
							backdropFilter: 'blur(24px)',
							boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.5)',
						}}
					>
						<div className="flex items-center justify-between p-6 border-b border-white/10">
							<Link
								href="/"
								onClick={() => setOpen(false)}
								className="flex items-center"
							>
								<img
									src="/assets/images/logo.png"
									alt="Velricon"
									className="h-8 w-auto object-contain"
								/>
							</Link>
							<button
								onClick={() => setOpen(false)}
								className="w-10 h-10 flex items-center justify-center rounded-lg text-platinum/60 hover:text-white hover:bg-white/5 transition-all"
								aria-label="Close menu"
							>
								<X size={24} />
							</button>
						</div>

						<div className="p-6 space-y-1">
							<div className="mb-6">
								<p className="text-xs font-medium tracking-wider text-strategy-blue/80 uppercase mb-4 px-3">
									Services
								</p>
								<div className="space-y-1">
									{servicesLinks.primary.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={() => {
												trackEvent('nav_service_click', { service: link.label });
												setOpen(false);
											}}
											className="block px-4 py-3 rounded-lg text-base font-body text-platinum/70 hover:text-white hover:bg-white/5 transition-all duration-200"
										>
											{link.label}
										</Link>
									))}
									{servicesLinks.secondary.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={() => {
												trackEvent('nav_service_click', { service: link.label });
												setOpen(false);
											}}
											className="block px-4 py-3 rounded-lg text-base font-body text-platinum/70 hover:text-white hover:bg-white/5 transition-all duration-200"
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>

							<div className="h-px bg-white/10 my-6" />

							<div className="space-y-1">
								{links.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										onClick={() => setOpen(false)}
										className="block px-4 py-3 rounded-lg text-base font-body text-platinum/70 hover:text-white hover:bg-white/5 transition-all duration-200"
									>
										{link.label}
									</Link>
								))}
							</div>

							<div className="pt-6 mt-6 border-t border-white/10">
								<button
									onClick={() => {
										setOpen(false);
										handleStrategyCallClick();
									}}
									className="w-full flex items-center justify-center px-6 py-3.5 bg-white text-black font-body text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-300"
								>
									Financial Strategy Call
								</button>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);

	return (
		<>
			<header
				className={cn(
					'fixed top-0 z-50 w-full border-b transition-all duration-300 ease-out',
					{
						'bg-elevation-layer/95 backdrop-blur-3sm border-surface-border':
							scrolled,
						'bg-transparent border-transparent':
							!scrolled,
					}
				)}
			>
				<nav className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
						<img
							src="/assets/images/logo.png"
							alt="Velricon"
							className="h-8 w-auto object-contain"
						/>
					</Link>

					<div className="hidden items-center gap-6 md:flex">
						{/* Services Dropdown */}
						<div
							ref={servicesDropdownRef}
							className="relative"
							onPointerEnter={() => setIsServicesDropdownOpen(true)}
							onPointerLeave={() => setIsServicesDropdownOpen(false)}
						>
							<Link
								href="/services"
								onClick={() => setIsServicesDropdownOpen(false)}
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									'font-body text-base xl:text-lg text-white/90 hover:text-white flex items-center gap-1.5 hover:bg-transparent'
								)}
							>
								Services
								<ChevronDown
									size={16}
									className={cn(
										'transition-transform duration-200',
										isServicesDropdownOpen ? 'rotate-180' : ''
									)}
								/>
							</Link>

							<AnimatePresence>
								{isServicesDropdownOpen && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.12, ease: 'easeOut' }}
										className="absolute top-full left-0 mt-2 min-w-[220px] z-30"
									>
										<div
											className="rounded-xl overflow-hidden border border-white/[0.15]"
											style={{
												background: 'rgba(14, 16, 26, 0.95)',
												backdropFilter: 'blur(24px)',
												boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
											}}
										>
											<div className="py-2">
												{[...servicesLinks.primary, ...servicesLinks.secondary].map((item) => (
													<Link
														key={item.href}
														href={item.href}
														onClick={() => {
															setIsServicesDropdownOpen(false);
															trackEvent('nav_service_click', { service: item.label });
														}}
														className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
													>
														{item.label}
													</Link>
												))}
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Other Links */}
						{links.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									'font-body text-base xl:text-lg text-white/90 hover:text-white hover:bg-transparent'
								)}
							>
								{link.label}
							</Link>
						))}

						<Button
							variant="outline"
							onClick={handleStrategyCallClick}
							className="bg-white text-black border-2 border-black rounded-full px-6 xl:px-8 py-3 xl:py-3.5 text-sm xl:text-base font-body font-medium hover:bg-white/90 hover:text-black"
						>
							Financial Strategy Call
						</Button>
					</div>

					<Button
						size="icon"
						variant="outline"
						onClick={() => setOpen(!open)}
						className="md:hidden text-white/60 hover:text-white hover:bg-white/5 bg-transparent"
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label="Toggle menu"
					>
						{open ? <X size={24} /> : <Menu size={24} />}
					</Button>
				</nav>

			</header>
			{isMounted ? createPortal(mobileMenu, document.body) : null}
		</>
	);
}

