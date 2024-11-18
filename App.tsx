import {NavigationContainer} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Navbar from './src/components/Navbar/Navbar'
import Footer from './src/components/Footer/Footer'

import {TabNavigationStack} from './src/stacks/TabNavigation';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Navbar />
                <TabNavigationStack />
                <Footer/>
            </NavigationContainer>
        </QueryClientProvider>
    );
}

export default App;
