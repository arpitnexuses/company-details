import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image, Link, Svg, Path, Circle } from '@react-pdf/renderer'
import type { Company } from '@/data/companies'

type Props = {
  company: Company
  logoDataUrl?: string
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 18,
    fontFamily: 'Helvetica',
  },
  header: {
    backgroundColor: '#00153D',
    color: '#ffffff',
    padding: 20,
    marginBottom: 14,
    borderRadius: 10,
    position: 'relative',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  logoPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid rgba(255,255,255,0.2)',
  },
  logoText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerInfo: { flex: 1 },
  companyName: { fontSize: 22, fontWeight: 'bold', marginBottom: 6, color: '#ffffff' },
  companyType: { fontSize: 12, marginBottom: 10, color: 'rgba(255,255,255,0.9)' },
  badges: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  badge: { backgroundColor: '#ffffff', color: '#00153D', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, fontSize: 9, fontWeight: 'bold' },
  priorityBadge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, fontSize: 9, fontWeight: 'bold', color: '#ffffff' },
  section: { marginBottom: 14, backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 8 },
  sectionIndicator: { width: 3, height: 20, backgroundColor: '#00153D', borderRadius: 2 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#000000' },
  sectionSubtitle: { fontSize: 13, fontWeight: 'bold', color: '#000000' },
  sectionText: { fontSize: 10, lineHeight: 1.4, color: '#000000' },
  grid: { flexDirection: 'row', gap: 12 },
  gridColumn: { flex: 1, width: '50%' },
  sectionCompact: { marginBottom: 0, backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 },
  sectionCompactTightBottom: { paddingBottom: 8 },
  card: { backgroundColor: '#ffffff', border: '1px solid #00153D', borderRadius: 8, padding: 12, marginBottom: 10 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, gap: 6 },
  cardIcon: { width: 18, height: 18, backgroundColor: 'rgba(0,21,61,0.1)', borderRadius: 6, justifyContent: 'center', alignItems: 'center' },
  cardTitle: { fontSize: 10, fontWeight: 'bold', color: '#000000' },
  cardText: { fontSize: 9, color: '#000000' },
  cardLink: { fontSize: 9, color: '#00153D', textDecoration: 'none' },
  decisionMakersGrid: { flexDirection: 'row', gap: 10 },
  decisionMakerCard: { flex: 1, border: '1px solid #e2e8f0', borderRadius: 8, padding: 12, backgroundColor: '#ffffff' },
  decisionMakerHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 8 },
  decisionMakerIcon: { width: 22, height: 22, backgroundColor: '#00153D', borderRadius: 11, justifyContent: 'center', alignItems: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 10 },
  decisionMakerRole: { fontSize: 10, fontWeight: 'bold', color: '#000000', marginBottom: 2 },
  decisionMakerPriority: { fontSize: 8, color: '#6b7280' },
  decisionMakerName: { fontSize: 9, color: '#000000', lineHeight: 1.4, marginBottom: 10 },
  connectButton: { backgroundColor: '#00153D', color: '#ffffff', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6, fontSize: 8, fontWeight: 'bold', textDecoration: 'none' },
  pitchSection: { backgroundColor: 'rgba(0,21,61,0.05)', border: '1px solid rgba(0,21,61,0.2)', borderRadius: 10, padding: 18, marginBottom: 14 },
  pitchContent: { backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 8, padding: 14, border: '1px solid rgba(0,21,61,0.1)' },
  pitchText: { fontSize: 9, lineHeight: 1.6, color: '#000000' },
  newsLink: { fontSize: 9, color: '#00153D', fontWeight: 'bold', textDecoration: 'none', marginTop: 6 },
  footer: { backgroundColor: '#f1f5f9', borderRadius: 10, padding: 10, alignItems: 'center', border: '1px solid #e2e8f0' },
  footerText: { fontSize: 8, color: '#6b7280', fontWeight: 'bold' },
  listedBadge: { paddingHorizontal: 6, paddingVertical: 3, borderRadius: 12, fontSize: 8, fontWeight: 'bold' },
  listedYes: { backgroundColor: '#dcfce7', color: '#166534' },
  listedNo: { backgroundColor: '#f3f4f6', color: '#6b7280' },
  pageTopSpacer: { height: 8 },
})

// Helper to truncate text for single-page fit
function truncate(text: string | undefined, max: number): string {
  if (!text) return ''
  if (text.length <= max) return text
  return text.slice(0, max - 1) + '…'
}

// Icon Components
const WebIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#00153D"/>
  </Svg>
)

const EmailIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#00153D"/>
  </Svg>
)

const LinkedInIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#00153D"/>
  </Svg>
)

const MoneyIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" fill="#00153D"/>
  </Svg>
)

const ShieldIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" fill="#00153D"/>
  </Svg>
)

const ChartIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" fill="#00153D"/>
  </Svg>
)

const LocationIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M12,2C8.13,2 5,5.13 5,9C5,14.25 12,22 12,22S19,14.25 19,9C19,5.13 15.87,2 12,2M12,11.5C10.62,11.5 9.5,10.38 9.5,9S10.62,6.5 12,6.5S14.5,7.62 14.5,9S13.38,11.5 12,11.5Z" fill="#00153D"/>
  </Svg>
)

const CalendarIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" fill="#00153D"/>
  </Svg>
)

const PeopleIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,13C18.67,13 24,14.33 24,17V20H8V17C8,14.33 13.33,13 16,13M8,12C10.21,12 12,10.21 12,8C12,5.79 10.21,4 8,4C5.79,4 4,5.79 4,8C4,10.21 5.79,12 8,12M8,13C5.33,13 0,14.33 0,17V20H6V17C6,15.9 6.9,15 8,15" fill="#00153D"/>
  </Svg>
)

const LinkIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24">
    <Path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83L7.05,12.71C5.68,11.34 5.68,9.07 7.05,7.7L9.17,5.58C9.56,5.19 10.2,5.19 10.59,5.58C11,5.97 11,6.61 10.59,7L8.88,8.71C8.49,9.1 8.49,9.74 8.88,10.13L10.59,11.84C11,12.23 11,12.87 10.59,13.41M16.95,7.05C18.32,8.42 18.32,10.69 16.95,12.06L14.83,14.18C14.44,14.57 13.8,14.57 13.41,14.18C13.02,13.79 13.02,13.15 13.41,12.76L15.54,10.64C15.93,10.25 15.93,9.61 15.54,9.22L13.41,7.1C13.02,6.71 13.02,6.07 13.41,5.68C13.8,5.29 14.44,5.29 14.83,5.68L16.95,7.05M15.54,13.41C15.93,13.8 15.93,14.44 15.54,14.83C15.15,15.22 14.51,15.22 14.12,14.83L11.99,12.71C10.62,11.34 10.62,9.07 11.99,7.7L14.12,5.58C14.51,5.19 15.15,5.19 15.54,5.58C15.93,5.97 15.93,6.61 15.54,7L13.83,8.71C13.44,9.1 13.44,9.74 13.83,10.13L15.54,11.84C15.93,12.23 15.93,12.87 15.54,13.41Z" fill="#00153D"/>
  </Svg>
)

export default function CompanyPDFDocument({ company, logoDataUrl }: Props) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return '#10b981'
      case 'Medium':
        return '#f59e0b'
      default:
        return '#ef4444'
    }
  }

  const resolvedLogo = logoDataUrl || company.logoLink

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {resolvedLogo ? (
              <Image style={styles.logo} src={resolvedLogo} />
            ) : (
              <View style={styles.logoPlaceholder}>
                <Text style={styles.logoText}>LOGO</Text>
              </View>
            )}
            
            <View style={styles.headerInfo}>
              <Text style={styles.companyName}>{company.name}</Text>
              <Text style={styles.companyType}>{company.type}</Text>
              
              <View style={styles.badges}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <LocationIcon />
                  <Text style={styles.badge}>{company.hq} (HQ)</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <CalendarIcon />
                  <Text style={styles.badge}>Founded: {company.yearFounded}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <PeopleIcon />
                  <Text style={styles.badge}>{company.employeeSize} employees</Text>
                </View>
                <Text style={[styles.priorityBadge, { backgroundColor: getPriorityColor(company.permissibility) }]}>
                  {company.permissibility} Priority
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Executive Summary */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIndicator} />
            <Text style={styles.sectionTitle}>Executive Summary</Text>
          </View>
          <Text style={styles.sectionText}>{truncate(company.companyOverview, 500)}</Text>
        </View>

        {/* Company Information Grid (Horizontal) */}
        <View style={styles.grid}>
          {/* Basic Information (Left Column) */}
          <View style={styles.gridColumn}>
            <View style={[styles.sectionCompact, styles.sectionCompactTightBottom]}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionIndicator} />
                <Text style={styles.sectionSubtitle}>Company Information</Text>
              </View>
              
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardIcon}>
                    <WebIcon />
                  </View>
                  <Text style={styles.cardTitle}>Website</Text>
                </View>
                <Link style={styles.cardLink} src={`https://${company.website}`}>
                  {company.website}
                </Link>
              </View>
              
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardIcon}>
                    <EmailIcon />
                  </View>
                  <Text style={styles.cardTitle}>Email</Text>
                </View>
                <Text style={styles.cardText}>{company.companyEmail}</Text>
              </View>
              
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardIcon}>
                    <LinkedInIcon />
                  </View>
                  <Text style={styles.cardTitle}>LinkedIn</Text>
                </View>
                <Link style={styles.cardLink} src={`https://${company.companyLinkedIn}`}>
                  View Company
                </Link>
              </View>
              
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardIcon}>
                    <MoneyIcon />
                  </View>
                  <Text style={styles.cardTitle}>Revenue</Text>
                </View>
                <Text style={styles.cardText}>{company.revenue}</Text>
              </View>
            </View>
          </View>

          {/* Business Focus (Right Column) */}
          <View style={styles.gridColumn}>
            <View style={styles.sectionCompact}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionIndicator} />
                <Text style={styles.sectionSubtitle}>Business Focus</Text>
              </View>
              
              <View style={[styles.card, { backgroundColor: '#f1f5f9', marginBottom: 12 }]}>
                <Text style={styles.cardText}>{truncate(company.serviceFocus, 320)}</Text>
              </View>
              
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardIcon}>
                    <ShieldIcon />
                  </View>
                  <Text style={styles.cardTitle}>Regulator</Text>
                </View>
                <Text style={styles.cardText}>{company.regulator}</Text>
              </View>
              
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardIcon}>
                    <ChartIcon />
                  </View>
                  <Text style={styles.cardTitle}>Listed</Text>
                </View>
                <Text style={[styles.listedBadge, company.listed === 'Yes' ? styles.listedYes : styles.listedNo]}>
                  {company.listed}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Decision Makers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIndicator} />
            <Text style={styles.sectionTitle}>Key Decision Makers</Text>
          </View>
          
          <View style={styles.decisionMakersGrid}>
            {[
              { role: "Primary Contact", name: company.decisionMaker1, linkedin: company.decisionMaker1LinkedIn, priority: "High Priority", icon: "1" },
              { role: "Secondary Contact", name: company.decisionMaker2, linkedin: company.decisionMaker2LinkedIn, priority: "Medium Priority", icon: "2" },
              { role: "Tertiary Contact", name: company.decisionMaker3, linkedin: company.decisionMaker3LinkedIn, priority: "Low Priority", icon: "3" }
            ].map((contact, index) => (
              <View key={index} style={styles.decisionMakerCard}>
                <View style={styles.decisionMakerHeader}>
                  <View style={styles.decisionMakerIcon}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 10 }}>{contact.icon}</Text>
                  </View>
                  <View style={styles.decisionMakerInfo}>
                    <Text style={styles.decisionMakerRole}>{contact.role}</Text>
                    <Text style={styles.decisionMakerPriority}>{contact.priority}</Text>
                  </View>
                </View>
                <Text style={styles.decisionMakerName}>{contact.name || 'Not available'}</Text>
                {contact.linkedin && (
                  <Link style={styles.connectButton} src={contact.linkedin}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                      <LinkedInIcon />
                      <Text>Connect</Text>
                    </View>
                  </Link>
                )}
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* Page 2: Remaining sections */}
      <Page size="A4" style={styles.page}>
        <View style={styles.pageTopSpacer} />
        {/* Pitch Opportunities */}
        <View style={styles.pitchSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIndicator} />
            <Text style={styles.sectionTitle}>Continental Pitch Opportunities</Text>
          </View>
          <View style={styles.pitchContent}>
            <Text style={styles.pitchText}>{truncate(company.notes, 360)}</Text>
          </View>
        </View>

        {/* Additional Information */}
        {company.additionalNotes && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIndicator} />
              <Text style={styles.sectionTitle}>Additional Insights</Text>
            </View>
            <Text style={styles.sectionText}>{truncate(company.additionalNotes, 260)}</Text>
          </View>
        )}

        {/* Latest News */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIndicator} />
            <Text style={styles.sectionTitle}>Latest News & Updates</Text>
          </View>
          <View style={styles.pitchContent}>
            <Text style={styles.pitchText}>{truncate(company.latestNews, 200)}</Text>
            {company.latestNewsLink && (
              <Link style={styles.newsLink} src={company.latestNewsLink}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <LinkIcon />
                  <Text>View Source</Text>
                </View>
              </Link>
            )}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Report generated on {new Date().toLocaleDateString()} | Continental Financial Services
          </Text>
        </View>
      </Page>
    </Document>
  )
}
