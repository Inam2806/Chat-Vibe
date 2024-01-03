import { Alert, Button, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';
import { useCallback } from 'react';
import { auth, database } from '../../misc/firebase';
import { isOfflineForDatabase } from '../../context/profile.context';

const DashboardToggle = () => {
    const { isOpen, open, close } = useModalState();
    const isMobile = useMediaQuery('(max-width: 992px)');

    const onSignOut = useCallback(() => {
        database
            .ref(`/status/${auth.currentUser.uid}`)
            .set(isOfflineForDatabase)
            .then(() => {
                auth.signOut();
                Alert.info('Signed out', 4000);
                close();
            }).catch(err=>{
                Alert.error(err.message,4000);
            });
            
    }, [close]);

    return (
        <>
            <Button block onClick={open} className="dashboard-btn">
                <span className='dashboard'><Icon  icon="dashboard" /> Dashboard</span>
            </Button>
            <Drawer
                full={isMobile}
                show={isOpen}
                onHide={close}
                placement="left"
            >
                <Dashboard onSignOut={onSignOut}></Dashboard>
            </Drawer>
        </>
    );
};

export default DashboardToggle;
