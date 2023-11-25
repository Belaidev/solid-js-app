import { APP_NAME } from '../consts/consts';

export function App() {
	return (
		<>
			{/* Logo */}
			<div class="flex flex-col gap-4">
				<div
					class="h-96 w-96 animate-jump-in animate-duration-[var(--trans-duration)] animate-ease-out"
					style={{ '--trans-duration': '750ms' }}
				>
					<img
						class="animate-rotate-y animate-delay-[var(--trans-duration)] animate-duration-[4000ms] animate-infinite animate-ease-linear"
						src="/favicon.svg"
						alt={`${APP_NAME} logo`}
					/>
				</div>

				{/* Hint */}
				<p class="text-xl">
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
			</div>
		</>
	);
}
