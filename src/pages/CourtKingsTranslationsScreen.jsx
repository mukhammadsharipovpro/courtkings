import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import CourtKingsHeader from '../components/CourtKingsHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>

      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>

      <Text style={styles.matchTime}>{time}</Text>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <CourtKingsHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NHL', '03.04 20:30', 'Toronto Maple Leafs \n' + 'Edmonton Oilers')}
        {renderBroadcast('KHL', '05.04 18:00', 'SKA St. Petersburg \n' + 'Avangard Omsk')}
        {renderBroadcast('SHL', '07.04 19:00', 'Frölunda HC \n' + 'Luleå HF')}
        {renderBroadcast('Liiga', '09.04 18:45', 'Tappara \n' + 'HIFK')}
        {renderBroadcast('DEL', '11.04 20:15', 'Eisbären Berlin \n' + 'Adler Mannheim')}
        {renderBroadcast('NLA', '13.04 19:30', 'ZSC Lions \n' + 'EV Zug')}
        {renderBroadcast('EIHL', '15.04 17:00', 'Belfast Giants \n' + 'Cardiff Devils')}
        {renderBroadcast('Czech Extraliga', '17.04 18:30', 'HC Sparta Praha \n' + 'HC Kometa Brno')}
        {renderBroadcast('AHL', '19.04 20:00', 'Hershey Bears \n' + 'Rochester Americans')}
        {renderBroadcast('Slovak Extraliga', '21.04 19:00', 'HC Košice \n' + 'HK Nitra')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: COLORS.black,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.main,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 22,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
