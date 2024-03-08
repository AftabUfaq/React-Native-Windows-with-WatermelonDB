import React, {useState, useEffect} from 'react';
import {SafeAreaView,Text, ScrollView, StatusBar} from 'react-native';
import RNFS from 'react-native-fs';
import Chart from './components/chart';
import Header from './components/header';
import Creator from './components/creator';

const App = () => {
  const [showCreator, setShowCreator] = useState(false);
  const [downloadsFolder, setDownloadsFolder] = useState('');
  const [documentsFolder, setDocumentsFolder] = useState('');
  const [externalDirectory, setExternalDirectory] = useState('');
  useEffect(() => {
    //get user's file paths from react-native-fs
    setDownloadsFolder(RNFS.DownloadDirectoryPath);
    setDocumentsFolder(RNFS.DocumentDirectoryPath); //alternative to MainBundleDirectory.
    setExternalDirectory(RNFS.ExternalStorageDirectoryPath);
  }, []);
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header onOpenCreator={() => setShowCreator(true)} />
          <Creator
            isCreatorVisible={showCreator}
            onHideCreator={() => setShowCreator(false)}
          />
          <Chart />
          <Text> Downloads Folder: {downloadsFolder}</Text>
      <Text>Documents folder: {documentsFolder}</Text>
      <Text>External storage: {externalDirectory}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;