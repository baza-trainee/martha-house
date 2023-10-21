import { FC } from 'react';

interface IProps {
    data: {
        email: string;
        phones: string;
        social_net: string;
    }

}

export const Footer:FC<IProps> = ({data:{ email, phones, social_net}}) => {

    return (
        <footer>
            <div>
            </div>
        </footer>
    )
};
