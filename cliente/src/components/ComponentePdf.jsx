// import React from 'react';
// import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// const ComponentePdf = () => {
//   const data = [
//     { id: 1, nombre_curso: 'Curso 1', nota: 'A' },
//     { id: 2, nombre_curso: 'Curso 2', nota: 'B' },
//     { id: 3, nombre_curso: 'Curso 3', nota: 'C' },
//     // Agrega más datos aquí
//   ];

//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4',
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//     title: {
//       fontSize: 20,
//       marginBottom: 10,
//       textAlign: 'center',
//     },
//     table: {
//       display: 'table',
//       width: 'auto',
//       borderStyle: 'solid',
//       borderWidth: 1,
//       borderRightWidth: 0,
//       borderBottomWidth: 0,
//     },
//     tableRow: { margin: 'auto', flexDirection: 'row' },
//     tableCell: {
//       margin: 'auto',
//       marginLeft: 5,
//       borderStyle: 'solid',
//       borderWidth: 1,
//       borderLeftWidth: 0,
//       borderTopWidth: 0,
//       padding: '2px 4px',
//     },
//   });

//   const generatePDF = () => (
//     <Document>
//       <Page size="A4">
//         <View style={styles.section}>
//           <Text style={styles.title}>Informe de Cursos y Notas</Text>

//           <View style={styles.table}>
//             <View style={styles.tableRow}>
//               <View style={styles.tableCell}>
//                 <Text>ID del Curso</Text>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text>Nombre del Curso</Text>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text>Nota</Text>
//               </View>
//             </View>
//             {data.map((item) => (
//               <View key={item.id} style={styles.tableRow}>
//                 <View style={styles.tableCell}>
//                   <Text>{item.id}</Text>
//                 </View>
//                 <View style={styles.tableCell}>
//                   <Text>{item.nombre_curso}</Text>
//                 </View>
//                 <View style={styles.tableCell}>
//                   <Text>{item.nota}</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );

//   return (
//     <div>
//       <h1>Informe de Cursos y Notas</h1>
//       <PDFViewer width="100%" height="800px">
//         {generatePDF()}
//       </PDFViewer>
//     </div>
//   );
// };

// export default ComponentePdf;

import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCell: {
    margin: 5,
    flexGrow: 1,
    fontSize: 12,
    padding: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
});

const MyPDFDocument = () => {
  const data = [
    { curso: 'Curso 1', nota: 'A' },
    { curso: 'Curso 2', nota: 'B' },
    { curso: 'Curso 3', nota: 'C' },
    // Agrega más datos aquí
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Informe de Cursos y Notas</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Curso</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Nota</Text>
              </View>
            </View>
            {data.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text>{item.curso}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{item.nota}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const App = () => {
  return (
    <div>
      <h1>Informe de Cursos y Notas</h1>
      <PDFViewer width="100%" height="800px">
        <MyPDFDocument />
      </PDFViewer>
    </div>
  );
};

export default App;
