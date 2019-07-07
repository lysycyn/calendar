import classNames from 'classnames';
import React from 'react';

import Bem from '../../helpers/Bem/Bem';

import './Header.css';

export interface HeaderProps {
    onNextClick: () => void;
    onPrevClick: () => void;
    text: string;
    cls?: string;
}

const BLOCK = 'header';

export default class Header extends React.Component<HeaderProps> {
    render(): React.ReactNode {
        const { cls, text, onNextClick, onPrevClick } = this.props;

        return (
            <div className={classNames(BLOCK, cls)}>
                <button
                    className={Bem.cls(BLOCK, 'btn', { prev: true })}
                    onClick={onPrevClick}
                />
                <button
                    className={Bem.cls(BLOCK, 'btn', { next: true })}
                    onClick={onNextClick}
                />
                <span className={Bem.cls(BLOCK, 'text')}>{text}</span>
            </div>
        );
    }
}
