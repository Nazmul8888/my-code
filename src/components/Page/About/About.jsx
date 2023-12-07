
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
      <View style={styles.section}>
        
        <img  src="https://i.ibb.co/ySRBhDL/Whats-App-Image-2023-12-06-at-11-34-41.jpg" alt="" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
      </View>
      
         <h1 className='font-bold text-green-300 text-3xl'>MOHAMMAD NAZMUL ALAM</h1> 
          <p  className=' text-xl '>E-mail: nazmulalam381@gmail.com</p> 
          <p className=' text-xl'>Address: House# 17/A, Road # 6,Shekertek,Adabar, Dhaka-1207</p> 
          <p className='text-xl'>Mobile: +88 01709-413651</p>
          <br />
          <br />
          <hr />
          <br />



<h1 className=' text-2xl text-red-400 font-bold'>ACADEMIC QUALIFICATIONS</h1>
<p>
<h2 className=' text-xl font-semibold '>Masters of Business Administration	Graduation year: 2012</h2>
 <h2 className=' text-xl font-semibold'>Jagannath University | Major: Accounting &Information Systems	</h2>
 <br />
 <br />
  <hr />


<h2 className=' text-2xl text-red-400 font-bold' >PROFESSIONAL QUALIFICATIONS</h2>
<h3  className=' text-xl font-semibold'>CA- CC Under supervision of Mohammad Mohasion FCA From Artisan & Co.</h3>
<p  className=' text-xl font-semibold'>Institute of Chartered Accountant of Bangladesh (ICAB)</p>
<br />
<hr />
 
<h2 className=' text-2xl text-red-400 font-bold'>SKILLS</h2>
 <h4  className=' text-xl font-semibold'>Web Development MySQL</h4>
 <h4  className=' text-xl font-semibold'>HTML</h4>
 <h4  className=' text-xl font-semibold'>React</h4>
 <h4  className=' text-xl font-semibold'> JavaScript</h4>
 <h4  className=' text-xl font-semibold'> Next.js</h4>
 <h4  className=' text-xl font-semibold'> Express Js</h4>
 <h4  className=' text-xl font-semibold'> Firebase</h4>
 <h4  className=' text-xl font-semibold'> MongoDB</h4>
 <br />
 <hr />

 <h2 className=' text-2xl text-red-400 font-bold'>SPECIAL QUALIFICATION</h2>
<p  className=' text-xl font-semibold'>•	Teamwork</p>
<p  className=' text-xl font-semibold'>•	Good communication skill</p>
<p  className=' text-xl font-semibold'>•	Ability to work under pressure</p>
<p  className=' text-xl font-semibold'>•	Adaptable</p>
<p  className=' text-xl font-semibold'>•	Time management</p>
 <br />

</p>

  </Document>
    );
};

export default About;