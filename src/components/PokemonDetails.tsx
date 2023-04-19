import useSWR from 'swr';
import closeModalIcon from '/icons/close-modal.svg';
import { PokemonDetails as IPokemonDetails } from '../types/pokemon';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	index: number;
}

export const PokemonDetails = ({ isOpen, onClose, index }: ModalProps) => {
	const { data } = useSWR<IPokemonDetails>(`pokemon/${index}`);
	console.log(data);

	if (!isOpen) return null;

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
					<div className='flex flex-col justify-center items-center p-2'>
						<h1 className='text-2xl capitalize'>{data?.name}</h1>

						<img src={data?.sprites.front_default} className='w-[200px]' />
						<img src={data?.sprites.back_default} className='w-[200px]' />
					</div>
				</div>
			</div>
		</div>
	);
};
