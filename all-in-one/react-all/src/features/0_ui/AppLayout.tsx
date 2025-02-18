import styles from './AppLayout.module.scss'
import TheNavigation from "./TheNavigation";
import { Outlet, useNavigation } from 'react-router-dom'


interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const navigation = useNavigation();

    const isLoading = navigation.state === 'loading';

    return (
        <div className={styles.layout}>
            { isLoading && 'Loading layout...'}
            
            <div className={styles.sidebar}>
                <TheNavigation />
            </div>
            <main>
                {/* {children} , work in router v5 and less/}
                {/* In this place will be render component element from rotuterV6 */}
                <Outlet /> 
            </main>
        </div>
    );
}