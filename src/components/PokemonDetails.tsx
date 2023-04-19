import { Suspense } from 'react';
import closeModalIcon from '/icons/close-modal.svg';
import useSWR from 'swr';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	index: number;
}

export const PokemonDetails = ({ isOpen, onClose, index }: ModalProps) => {
	const { data } = useSWR(`pokemon/${index}`);

	return (
		<div className='absolute inset-0 z-10 h-screen'>
			<div
				className='flex h-full items-center justify-center bg-slate-400 bg-opacity-25'
				onClick={(e) => {
					if (e.target === e.currentTarget) onClose();
				}}
			>
				<div className='relative w-[500px] h-[500px] rounded bg-black p-6'>
					<button className='absolute right-6' onClick={onClose}>
						<img alt='close modal' src={closeModalIcon} />
					</button>
					<div>{JSON.stringify(data)}</div>
				</div>
			</div>
		</div>
	);
};
