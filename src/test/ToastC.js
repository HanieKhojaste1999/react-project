import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';

const ToastC = () => {
    const [show, setshow] = useState(true);
    setTimeout(() => (setshow(false)), 2000);
    return (
        <div>
            <Toast show={show} onClose={() => setshow(false)}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">پیغام</strong>
                    <small>15:39</small>
                </Toast.Header>
                <Toast.Body>محصول با موفقیت به سبدخرید اضافه شد.</Toast.Body>
            </Toast>
        </div >
    );
};

export default ToastC;