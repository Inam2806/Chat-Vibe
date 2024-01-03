import { Button, Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';
import ProfileAvatar from '../../ProfileAvatar';

const ProfileInfoBtnModal = ({ profile, children, ...btnProps}) => {

    const { isOpen, close, open } = useModalState();
    const shortName = profile.name.split(' ')[0];
    const { name, avatar, createdAt } = profile;
    const memberSince = new Date(createdAt).toLocaleDateString();

    return (
        <>
            <Button {...btnProps} onClick={open}>{shortName}</Button>

            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>{shortName} profile</Modal.Title>
                </Modal.Header>

                <Modal.Body className=" text-center rs-modal-body">
                    <ProfileAvatar
                        src={avatar}
                        name={name}
                        className="width-200 height-200 img-fullsize font-huge"
                    />
                    <h4 className="message_1 mt-2">{name}</h4>
                    <p className="message_1">Member since {memberSince}</p>
                </Modal.Body>

                <Modal.Footer>
                    {children}
                    <Button block className="custom-button" onClick={close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
                
        </>
    );
};

export default ProfileInfoBtnModal;
