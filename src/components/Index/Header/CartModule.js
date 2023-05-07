import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useState, useReducer } from 'react';


const initialState = { count: 1 };
const CartModule = () => {

    const [show, setshow] = useState(true);


    const reducer = (state, action) => {
        if (action.type === 'increment') {
            return { count: state.count + 1 };
        }
        else if (action.type === 'decrement') {
            if (state.count === 1) {
                return { count: state.count }
            }
            else {
                return { count: state.count - 1 };
            }

        }

    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <Modal show={show} onHide={() => setshow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title> سبد خرید</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> کالا</th>
                                <th>تعداد</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>ساعت</td>
                                <td className='d-flex justify-content-center'>
                                    <Button variant='outline-dark' size='sm' onClick={() => dispatch({ type: 'decrement' })}>-</Button>
                                    <h6>{state.count}</h6>
                                    <Button variant='outline-dark' size='sm' onClick={() => dispatch({ type: 'increment' })}>+</Button>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setshow(false)}>
                        انصراف
                    </Button>
                    <Button variant="success">
                        ثبت
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CartModule;