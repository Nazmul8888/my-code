
import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

const About = () => {
    return (
        <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <h1>Nazmul khan</h1> 
        <img  src="https://i.ibb.co/ySRBhDL/Whats-App-Image-2023-12-06-at-11-34-41.jpg" alt="" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
      </View>
      <View style={styles.section}>
         <h1>MOHAMMAD NAZMUL ALAM</h1> <br />
          E-mail: nazmulalam381@gmail.com <br />
          Address: House# 17/A, Road # 6,Shekertek,Adabar, Dhaka-1207 <br />
          Mobile: +88 01709-413651
          <br />
          <br />
          <hr />
          <br />



<h1 className='text-bold'>ACADEMIC QUALIFICATIONS</h1>
<p>
Masters of Business Administration	Graduation year: 2012
Jagannath University | Major: Accounting &Information Systems	CGPA: 3.42/4

Bachelor of Business Administration	Graduation year: 2011
Jagannath University | Major: Accounting & Information Systems	CGPA: 3.53/4

Higher Secondary Certificate	Accomplishment year: 2007
Chainir Anjuman Ara School & College | Major: Business Studies	GPA: 4.60/5

Secondary School Certificate	Accomplishment year: 2005
Basudeb High School | Major: Business Studies	GPA: 3.81/5

PROFESSIONAL QUALIFICATIONS
CA- CC Under supervision of Mohammad Mohasion FCA From Artisan & Co.
Institute of Chartered Accountant of Bangladesh (ICAB)



TRAINING
 
•	Completed Technical and Soft skill training of LICT A project of Bangladesh Computer Council on Office Course
 
COMPUTER SKILLS


•	Enterprise resource planning (ERP) experience
•	MS Excel, MS Word & PowerPoint
•	Outlook & e-mail processing

SPECIAL QUALIFICATION
 
•	Teamwork
•	Good communication skill
•	Ability to work under pressure
•	Adaptable
•	Time management



</p>


 
      </View>
    </Page>
  </Document>
    );
};

export default About;