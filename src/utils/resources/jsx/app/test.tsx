import type { FC } from 'hono/jsx'
import { Button } from '../components/Button';
import { Hello } from './hello';


export const MyComponent: FC<{ title: string }> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <Button />
            <Hello />
        </div>
    )
}