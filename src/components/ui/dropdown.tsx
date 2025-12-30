'use client';

import React from 'react';
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { trackEvent } from '@/lib/analytics';

interface DropdownItem {
	key: string;
	label: React.ReactNode;
	href?: string;
	disabled?: boolean;
	danger?: boolean;
	icon?: React.ReactNode;
	type?: 'divider';
}

interface ServicesDropdownProps {
	items: DropdownItem[];
	children: React.ReactNode;
	className?: string;
}

export function ServicesDropdown({ items, children, className }: ServicesDropdownProps) {
	const menuItems: MenuProps['items'] = items
		.filter((item) => item.type !== 'divider')
		.map((item) => ({
			key: item.key,
			label: item.href ? (
				<Link
					href={item.href}
					onClick={() => {
						trackEvent('nav_service_click', { service: item.label });
					}}
					className="block w-full"
				>
					{item.label}
				</Link>
			) : (
				item.label
			),
			disabled: item.disabled,
			danger: item.danger,
			icon: item.icon,
		}));

	// Insert divider after primary items
	const dividerIndex = items.findIndex((item) => item.type === 'divider');
	if (dividerIndex > 0) {
		menuItems.splice(dividerIndex, 0, { type: 'divider' } as any);
	}

	return (
		<Dropdown
			menu={{ items: menuItems }}
			placement="bottomLeft"
			trigger={['hover']}
			className={className}
			mouseEnterDelay={0}
			mouseLeaveDelay={0.1}
		>
			<a onClick={(e) => e.preventDefault()} className="inline-flex items-center">
				{children}
			</a>
		</Dropdown>
	);
}

