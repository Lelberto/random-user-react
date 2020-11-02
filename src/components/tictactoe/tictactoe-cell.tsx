import React from 'react';
import { Image } from 'react-bootstrap';
import { CellId } from '../../types/tictactoe-data';

export interface TictactoeCellProps {
    id: CellId;
    element: string;
    writable: boolean;
    onPlace(id: number): void;
}

export const TictactoeCase: React.FC<TictactoeCellProps> = (props) => (
    <td className="tictactoe-cell" onClick={() => props.writable ? props.onPlace(props.id) : null}>
        <Image src={props.element}></Image>
    </td>
)
