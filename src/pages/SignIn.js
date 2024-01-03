import { Container, Col, Row, Grid, Panel, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';
import firebase from 'firebase/app';

const SignIn = () => {
    const signInWithProvider = async provider => {
        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(
                provider
            );
            if (additionalUserInfo.isNewUser) {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                });
            }
            Alert.success('Signed in', 4000);
        } catch (err) {
            Alert.error(err.message, 4000);
        }
    };
    const onGoogleSignIn = () => {
        signInWithProvider(new firebase.auth.GoogleAuthProvider());
    };

    return (
        <Container className='sign_in'>
            <Grid className="mt-page">
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel>
                            <div className="sign_in_1 text-center">
                                <h2>Welcome to Chat-Vibe</h2>
                                <p>A web-based chat platform for all.</p>
                            </div>
                            <div className=" mt-3">
                                <Button
                                    block
                                    color="green"
                                    onClick={onGoogleSignIn}
                                    
                                >
                                    <Icon  icon="google" /> Continue with Google
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
};

export default SignIn;
