import React from 'react';
import { CellId, CellType } from '../../types/tictactoe-data';

export interface TictactoeCellProps {
    id: CellId;
    element: CellType;
    writable: boolean;
    onPlace(id: number): void;
}

export const TictactoeCase: React.FC<TictactoeCellProps> = (props) => (
    <td onClick={() => props.writable ? props.onPlace(props.id) : null}>
        {props.element}
    </td>
)
