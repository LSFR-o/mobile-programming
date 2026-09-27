import { Ionicons } from '@expo/vector-icons';
import { registerRootComponent } from 'expo';
import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

type TabKey = 'profile' | 'records' | 'upload' | 'history';

interface TabItem {
  key: TabKey;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

const NAV_TABS: TabItem[] = [
  { key: 'profile', icon: 'person', label: 'Profile' },
  { key: 'records', icon: 'folder', label: 'My Records' },
  { key: 'upload', icon: 'add-circle', label: 'Add File' },
  { key: 'history', icon: 'time', label: 'Doctor Visits' },
];

// --- CUSTOM HEART + PLUS BADGE LOGO (NO SVG ERRORS) ---
function HealthLogo({ size = 130 }: { size?: number }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: '#2563EB',
        borderRadius: size * 0.24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
      }}
    >
      {/* Heart Outline */}
      <Ionicons name="heart-outline" size={size * 0.62} color="#FFFFFF" />
      {/* Plus Icon centered inside Heart */}
      <View style={{ position: 'absolute' }}>
        <Ionicons name="add" size={size * 0.35} color="#FFFFFF" />
      </View>
    </View>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('profile');
  const [splashVisible, setSplashVisible] = useState(true);

  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const heartbeatScale = useRef(new Animated.Value(1)).current;
  const splashFade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.sequence([
        Animated.timing(heartbeatScale, { toValue: 1.12, duration: 150, useNativeDriver: true }),
        Animated.timing(heartbeatScale, { toValue: 1.0, duration: 150, useNativeDriver: true }),
        Animated.timing(heartbeatScale, { toValue: 1.08, duration: 120, useNativeDriver: true }),
        Animated.timing(heartbeatScale, { toValue: 1.0, duration: 250, useNativeDriver: true }),
      ]).start();

      setTimeout(() => {
        Animated.timing(splashFade, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start(() => {
          setSplashVisible(false);
        });
      }, 1000);
    });
  }, []);

  const user = {
    name: 'Prabhat Bhatta',
    healthId: '2847 - 5912',
    bloodGroup: 'O+',
    phone: '+977 9800000000',
    emergencyContact: 'Father (Jyoti): +977 9811111111',
  };

  const medicalRecords = [
    { id: 'r1', title: 'Blood Test Report', facility: 'Kathmandu Clinic', date: 'Jul 22, 2026' },
    { id: 'r2', title: 'Chest X-Ray', facility: 'Grande Hospital', date: 'Jan 12, 2026' },
    { id: 'r3', title: 'Ultrasound Scan', facility: 'City Health Center', date: 'Nov 04, 2025' },
  ];

  const doctorVisits = [
    { id: 'v1', title: 'General Health Checkup', doctor: 'Dr. Aarav Sharma', date: 'Jul 22, 2026' },
    { id: 'v2', title: 'Heart Checkup', doctor: 'Dr. Priya Adhikari', date: 'Jan 12, 2026' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={splashVisible ? 'light-content' : 'dark-content'}
        backgroundColor={splashVisible ? '#1E293B' : '#F8FAFC'}
      />

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.nameTitle}>{user.name}</Text>
          </View>

          {/* TAB 1: PROFILE & DIGITAL PASSPORT */}
          {activeTab === 'profile' && (
            <View>
              <Text style={styles.sectionHeader}>My Digital Health Passport</Text>

              <View style={styles.cleanPassportCard}>
                <View style={styles.cardHeaderRow}>
                  <View style={styles.cardIconCircle}>
                    <Ionicons name="card-outline" size={26} color="#2563EB" />
                  </View>
                  <View>
                    <Text style={styles.cleanCardHeaderTitle}>HEALTH PASSPORT</Text>
                    <Text style={styles.cleanCardHeaderSub}>Official Patient Card</Text>
                  </View>
                </View>

                <View style={styles.cardDividerLight} />

                <Text style={styles.cleanIdLabel}>ID NUMBER</Text>
                <Text style={styles.cleanIdValue}>{user.healthId}</Text>

                <View style={styles.cleanCardInfoRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.cleanInfoLabel}>BLOOD TYPE</Text>
                    <Text style={styles.cleanInfoValue}>{user.bloodGroup}</Text>
                  </View>
                  <View style={styles.cardDividerVertical} />
                  <View style={styles.infoCol}>
                    <Text style={styles.cleanInfoLabel}>STATUS</Text>
                    <Text style={[styles.cleanInfoValue, { color: '#16A34A' }]}>Active</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.sectionHeader}>Personal Details</Text>

              <View style={styles.infoBox}>
                <View style={[styles.infoIconBg, { backgroundColor: '#EFF6FF' }]}>
                  <Ionicons name="call" size={22} color="#2563EB" />
                </View>
                <View>
                  <Text style={styles.infoBoxLabel}>Phone Number</Text>
                  <Text style={styles.infoBoxValue}>{user.phone}</Text>
                </View>
              </View>

              <View style={styles.infoBox}>
                <View style={[styles.infoIconBg, { backgroundColor: '#FEE2E2' }]}>
                  <Ionicons name="alert-circle" size={22} color="#DC2626" />
                </View>
                <View>
                  <Text style={styles.infoBoxLabel}>Emergency Contact</Text>
                  <Text style={[styles.infoBoxValue, { color: '#DC2626' }]}>{user.emergencyContact}</Text>
                </View>
              </View>
            </View>
          )}

          {/* TAB 2: MY RECORDS */}
          {activeTab === 'records' && (
            <View>
              <Text style={styles.sectionHeader}>My Medical Reports</Text>
              {medicalRecords.map((item) => (
                <Pressable
                  key={item.id}
                  style={({ pressed }) => [styles.largeListItem, pressed && styles.itemPressed]}
                  onPress={() => Alert.alert('Opening Document', item.title)}
                >
                  <View style={styles.itemIconCircle}>
                    <Ionicons name="document-text" size={28} color="#2563EB" />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemSubText}>{item.facility} • {item.date}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
                </Pressable>
              ))}
            </View>
          )}

          {/* TAB 3: ADD FILE / UPLOAD */}
          {activeTab === 'upload' && (
            <View style={styles.uploadSection}>
              <Text style={styles.sectionHeader}>Add New Report</Text>

              <Pressable
                style={({ pressed }) => [styles.bigButton, styles.cameraBtn, pressed && styles.itemPressed]}
                onPress={() => Alert.alert('Camera', 'Opening camera to scan paper report...')}
              >
                <Ionicons name="camera" size={32} color="#FFFFFF" />
                <Text style={styles.bigButtonText}>Take Photo of Document</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [styles.bigButton, styles.galleryBtn, pressed && styles.itemPressed]}
                onPress={() => Alert.alert('Gallery', 'Opening photo library...')}
              >
                <Ionicons name="images" size={32} color="#2563EB" />
                <Text style={[styles.bigButtonText, { color: '#2563EB' }]}>Upload from Phone</Text>
              </Pressable>
            </View>
          )}

          {/* TAB 4: DOCTOR VISITS */}
          {activeTab === 'history' && (
            <View>
              <Text style={styles.sectionHeader}>Past Doctor Visits</Text>
              {doctorVisits.map((item) => (
                <Pressable
                  key={item.id}
                  style={({ pressed }) => [styles.largeListItem, pressed && styles.itemPressed]}
                  onPress={() => Alert.alert('Visit Details', item.title)}
                >
                  <View style={[styles.itemIconCircle, { backgroundColor: '#EFF6FF' }]}>
                    <Ionicons name="calendar" size={28} color="#2563EB" />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemSubText}>{item.doctor} • {item.date}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
                </Pressable>
              ))}
            </View>
          )}
        </ScrollView>

        {/* BOTTOM NAVIGATION BAR */}
        <View style={styles.bottomNavContainer}>
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <Pressable
                key={tab.key}
                style={styles.navTabButton}
                onPress={() => setActiveTab(tab.key)}
              >
                <Ionicons
                  name={tab.icon}
                  size={26}
                  color={isActive ? '#2563EB' : '#6B7280'}
                />
                <Text style={[styles.navTabLabel, isActive && styles.navTabLabelActive]}>
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* STARTING SPLASH SCREEN ANIMATION */}
      {splashVisible && (
        <Animated.View style={[styles.splashContainer, { opacity: splashFade }]}>
          <Animated.View
            style={{
              opacity: logoOpacity,
              transform: [{ scale: logoScale }, { scale: heartbeatScale }],
            }}
          >
            <HealthLogo size={130} />
          </Animated.View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
  },
  splashContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 110,
  },
  header: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B5563',
  },
  nameTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F172A',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 14,
  },
  cleanPassportCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    elevation: 2,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cleanCardHeaderTitle: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  cleanCardHeaderSub: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '500',
  },
  cardDividerLight: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 16,
  },
  cleanIdLabel: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '700',
  },
  cleanIdValue: {
    color: '#0F172A',
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 16,
  },
  cleanCardInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  infoCol: {
    flex: 1,
  },
  cleanInfoLabel: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '700',
  },
  cleanInfoValue: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
  },
  cardDividerVertical: {
    width: 1,
    height: 28,
    backgroundColor: '#CBD5E1',
    marginHorizontal: 16,
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  infoIconBg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBoxLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  infoBoxValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 2,
  },
  largeListItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  itemPressed: {
    opacity: 0.7,
  },
  itemIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  itemSubText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
    marginTop: 4,
  },
  uploadSection: {
    gap: 16,
  },
  bigButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 18,
    borderRadius: 16,
  },
  cameraBtn: {
    backgroundColor: '#2563EB',
  },
  galleryBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2563EB',
  },
  bigButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1.5,
    borderTopColor: '#E2E8F0',
    paddingBottom: 10,
  },
  navTabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  navTabLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 4,
  },
  navTabLabelActive: {
    color: '#2563EB',
    fontWeight: '800',
  },
});

registerRootComponent(App);