import { Button, Modal,Icon } from 'rsuite';

import { useCurrentRoom } from '../../../context/current-room.context';
import { useModalState } from '../../../misc/custom-hooks';
import { memo } from 'react';

const RoomInfoBtnModal = () => {
    const { isOpen, close, open } = useModalState();

    const description = useCurrentRoom(v => v.description);
    const name = useCurrentRoom(v => v.name);

    return (
        <>
            <Button  className='br-circle' size="sx" color="white" onClick={open}>
              <Icon icon="eye"className='eye'></Icon>
            </Button>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>About {name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h6 className="mb-1">Description</h6>
                    <p>{description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button block onClick={close} className='close'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default memo(RoomInfoBtnModal);
