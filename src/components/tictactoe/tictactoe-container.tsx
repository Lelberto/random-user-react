import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { CellType } from '../../types/tictactoe-data';
import { TictactoeCase as TictactoeCell } from './tictactoe-cell'

export const TictactoeContainer: React.FC = () => {
    const [char, setChar] = useState('x');
    const [cell0, setCell0] = useState<CellType>('');
    const [cell1, setCell1] = useState<CellType>('');
    const [cell2, setCell2] = useState<CellType>('');
    const [cell3, setCell3] = useState<CellType>('');
    const [cell4, setCell4] = useState<CellType>('');
    const [cell5, setCell5] = useState<CellType>('');
    const [cell6, setCell6] = useState<CellType>('');
    const [cell7, setCell7] = useState<CellType>('');
    const [cell8, setCell8] = useState<CellType>('');

    useEffect(() => {
        console.log(cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8);
        checkWin('x');
        checkWin('o');
    }, [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8]);

    const handlePlace = (id: number) => {
        const placeChar = char === 'x' ? 'x' : 'o';
        switch (id) {
            case 0:
                setCell0(placeChar);
                break;
            case 1:
                setCell1(placeChar);
                break;
            case 2:
                setCell2(placeChar);
                break;
            case 3:
                setCell3(placeChar);
                break;
            case 4:
                setCell4(placeChar);
                break;
            case 5:
                setCell5(placeChar);
                break;
            case 6:
                setCell6(placeChar);
                break;
            case 7:
                setCell7(placeChar);
                break;
            case 8:
                setCell8(placeChar);
                break;
            default:
                console.error('Unknown cell ID');
                break;
        }
        setChar(placeChar === 'x' ? 'o' : 'x');
    }

    const checkWin = (cell: CellType) => {
        if ((cell0 === cell && cell1 === cell && cell2 === cell)
            || (cell3 === cell && cell4 === cell && cell5 === cell)
            || (cell6 === cell && cell7 === cell && cell8 === cell)
            || (cell0 === cell && cell3 === cell && cell6 === cell)
            || (cell1 === cell && cell4 === cell && cell7 === cell)
            || (cell2 === cell && cell5 === cell && cell8 === cell)
            || (cell0 === cell && cell4 === cell && cell8 === cell)
            || (cell2 === cell && cell4 === cell && cell6 === cell)
            ) {
                alert(`${cell} wins !`);
        }
    }

    const isWritable = (cell: CellType) => {
        return cell === '';
    }

    return (
        <Container className=" mt-5 d-flex justify-content-center">
            <table>
                <tbody>
                    <tr>
                        <TictactoeCell id={0} element={cell0} writable={isWritable(cell0)} onPlace={handlePlace} />
                        <TictactoeCell id={1} element={cell1} writable={isWritable(cell1)} onPlace={handlePlace} />
                        <TictactoeCell id={2} element={cell2} writable={isWritable(cell2)} onPlace={handlePlace} />
                    </tr>
                    <tr>
                        <TictactoeCell id={3} element={cell3} writable={isWritable(cell3)} onPlace={handlePlace} />
                        <TictactoeCell id={4} element={cell4} writable={isWritable(cell4)} onPlace={handlePlace} />
                        <TictactoeCell id={5} element={cell5} writable={isWritable(cell5)} onPlace={handlePlace} />
                    </tr>
                    <tr>
                        <TictactoeCell id={6} element={cell6} writable={isWritable(cell6)} onPlace={handlePlace} />
                        <TictactoeCell id={7} element={cell7} writable={isWritable(cell7)} onPlace={handlePlace} />
                        <TictactoeCell id={8} element={cell8} writable={isWritable(cell8)} onPlace={handlePlace} />
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
