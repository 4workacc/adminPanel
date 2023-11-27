import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}
export const generateDocument = (userInfoData) => {
  let fam_arr = ["","","","","","","","","","","","","","","","","","","","",];
  for (let i=0; i<userInfoData.fam.length; i++){
    fam_arr[i] = userInfoData.fam[i];
  }
  let name_arr = ["","","","","","","","","","","","","","","","","","","","",];
  for (let i=0; i<userInfoData.name.length; i++){
    name_arr[i] = userInfoData.name[i];
  }
  let subname_arr = ["","","","","","","","","","","","","","","","","","","","",];
  for (let i=0; i<userInfoData.subname.length; i++){
    subname_arr[i] = userInfoData.subname[i];
  }
  let pass_long_arr = ["","","","","","","","","","","","","",""];
  for (let i=0; i<userInfoData.pass_long.length; i++){
    pass_long_arr[i] = userInfoData.pass_long[i];
  }
  let pass_short_arr = ["",""," ","","","","","",""];
  for (let i=0; i<userInfoData.pass_short.length; i++){
    pass_short_arr[i] = userInfoData.pass_short[i];
  }
  let pass_who0_arr = ["","","","","","","","","","","","","","","","","","","","",];
  for (let i=0; i<userInfoData.pass_who_0.length; i++){
    pass_who0_arr[i] = userInfoData.pass_who_0[i];
  }
  let pass_who1_arr = ["","","","","","","","","","","","","","","","","","","","",];
  for (let i=0; i<userInfoData.pass_who_1.length; i++){
    pass_who1_arr[i] = userInfoData.pass_who_1[i];
  }
  
  let pass_when = userInfoData.pass_when.split(".").join("");

  let wd0 =pass_when[0]||"";
  let wd1 =pass_when[1]||"";
  let wm0 =pass_when[2]||"";
  let wm1 =pass_when[3]||"";
  let wy0 =pass_when[4]||"";
  let wy1 =pass_when[5]||"";
  let wy2 =pass_when[6]||"";
  let wy3 =pass_when[7]||"";

  let emp0_arr = ["","","","","","","","","","","","","","","","","","","",""];
  let emp1_arr = ["","","","","","","","","","","","","","","","","","","",""];
  let emp2_arr = ["","","","","","","","","","","","","","","","","","","",""];

  let emp_arr = userInfoData.emp.split(" ");
  for (let i=0; i<emp_arr[0].length; i++ ) { emp0_arr[i] = emp_arr[0][i]};
  if (emp_arr.length>1) for (let i=0; i<emp_arr[1].length; i++ ) { emp1_arr[i] = emp_arr[1][i]}; 
  if (emp_arr.length>2) for (let i=0; i<emp_arr[2].length; i++ ) { emp2_arr[i] = emp_arr[2][i]};

  let old_cert_arr = ["","","","","","","","","","","","","","","","","","","","","","","",""];
  if (userInfoData.is_oldCert) {
    for (let i=0; i<userInfoData.old_certId.length; i++) {
      old_cert_arr[i] = userInfoData.old_certId[i];
    }
  }

  let old_fio_arr = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  if (userInfoData.is_oldCert){
    let curFam = (userInfoData.old_fam === userInfoData.fam)? userInfoData.fam: userInfoData.old_fam;
    let newFIO = `${curFam} ${userInfoData.name} ${userInfoData.subname}`;
    if ( newFIO.length <= 26 ) {
      for (let i=0; i<newFIO.length; i++) {
        old_fio_arr[i] = newFIO[i]
      }
    }
    else {
      let fam_name = `${curFam} ${userInfoData.name}`;
      for (let i=0; i<fam_name.length;i++) {
        old_fio_arr[i]= fam_name[i]
      };
      for (let i=26;i<(26+userInfoData.subname.length);i++) {
        old_fio_arr[i] = userInfoData.subname[i-26];
      }
    }
  }
    loadFile(
      '/doc_templates/key_ethalon.docx',
      function (error, content) {
        if (error) {
          throw error;
        }
        var zip = new PizZip(content);
        var doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
        doc.setData({
          fam_0: fam_arr[0],
          fam_1: fam_arr[1],
          fam_2: fam_arr[2],
          fam_3: fam_arr[3],
          fam_4: fam_arr[4],
          fam_5: fam_arr[5],
          fam_6: fam_arr[6],
          fam_7: fam_arr[7],
          fam_8: fam_arr[8],
          fam_9: fam_arr[9],
          fam_10: fam_arr[10],
          fam_11: fam_arr[11],
          fam_12: fam_arr[12],
          fam_13: fam_arr[13],
          fam_14: fam_arr[14],
          fam_15: fam_arr[15],
          fam_16: fam_arr[16],
          fam_17: fam_arr[17],
          fam_18: fam_arr[18],
          fam_19: fam_arr[19],         

          nam_0: name_arr[0],
          nam_1: name_arr[1],
          nam_2: name_arr[2],
          nam_3: name_arr[3],
          nam_4: name_arr[4],
          nam_5: name_arr[5],
          nam_6: name_arr[6],
          nam_7: name_arr[7],
          nam_8: name_arr[8],
          nam_9: name_arr[9],
          nam_10: name_arr[10],
          nam_11: name_arr[11],
          nam_12: name_arr[12],
          nam_13: name_arr[13],
          nam_14: name_arr[14],
          nam_15: name_arr[15],
          nam_16: name_arr[16],
          nam_17: name_arr[17],
          nam_18: name_arr[18],
          nam_19: name_arr[19], 

          sam_0: subname_arr[0],
          sam_1: subname_arr[1],
          sam_2: subname_arr[2],
          sam_3: subname_arr[3],
          sam_4: subname_arr[4],
          sam_5: subname_arr[5],
          sam_6: subname_arr[6],
          sam_7: subname_arr[7],
          sam_8: subname_arr[8],
          sam_9: subname_arr[9],
          sam_10: subname_arr[10],
          sam_11: subname_arr[11],
          sam_12: subname_arr[12],
          sam_13: subname_arr[13],
          sam_14: subname_arr[14],
          sam_15: subname_arr[15],
          sam_16: subname_arr[16],
          sam_17: subname_arr[17],
          sam_18: subname_arr[18],
          sam_19: subname_arr[19], 
         
          pl_0: pass_long_arr[0],
          pl_1: pass_long_arr[1],
          pl_2: pass_long_arr[2],
          pl_3: pass_long_arr[3],
          pl_4: pass_long_arr[4],
          pl_5: pass_long_arr[5],
          pl_6: pass_long_arr[6],
          pl_7: pass_long_arr[7],
          pl_8: pass_long_arr[8],
          pl_9: pass_long_arr[9],
          pl_10: pass_long_arr[10],
          pl_11: pass_long_arr[11],
          pl_12: pass_long_arr[12],
          pl_13: pass_long_arr[13],
      
          ps_0: pass_short_arr[0],
          ps_1: pass_short_arr[1],
          ps_2: pass_short_arr[2],
          ps_3: pass_short_arr[3],
          ps_4: pass_short_arr[4],
          ps_5: pass_short_arr[5],
          ps_6: pass_short_arr[6],
          ps_7: pass_short_arr[7],
          ps_8: pass_short_arr[8],

          w1_0: pass_who0_arr[0],
          w1_1: pass_who0_arr[1],
          w1_2: pass_who0_arr[2],
          w1_3: pass_who0_arr[3],
          w1_4: pass_who0_arr[4],
          w1_5: pass_who0_arr[5],
          w1_6: pass_who0_arr[6],
          w1_7: pass_who0_arr[7],
          w1_8: pass_who0_arr[8],
          w1_9: pass_who0_arr[9],
          w1_10: pass_who0_arr[10],
          w1_11: pass_who0_arr[11],
          w1_12: pass_who0_arr[12],
          w1_13: pass_who0_arr[13],
          w1_14: pass_who0_arr[14],
          w1_15: pass_who0_arr[15],
          w1_16: pass_who0_arr[16],
          w1_17: pass_who0_arr[17],
          w1_18: pass_who0_arr[18],
          w1_19: pass_who0_arr[19],

          w2_0: pass_who1_arr[0],
          w2_1: pass_who1_arr[1],
          w2_2: pass_who1_arr[2],
          w2_3: pass_who1_arr[3],
          w2_4: pass_who1_arr[4],
          w2_5: pass_who1_arr[5],
          w2_6: pass_who1_arr[6],
          w2_7: pass_who1_arr[7],
          w2_8: pass_who1_arr[8],
          w2_9: pass_who1_arr[9],
          w2_10: pass_who1_arr[10],
          w2_11: pass_who1_arr[11],
          w2_12: pass_who1_arr[12],
          w2_13: pass_who1_arr[13],
          w2_14: pass_who1_arr[14],
          w2_15: pass_who1_arr[15],
          w2_16: pass_who1_arr[16],
          w2_17: pass_who1_arr[17],
          w2_18: pass_who1_arr[18],
          w2_19: pass_who1_arr[19],

          wd0: wd0,
          wd1: wd1,
          wm0: wm0,
          wm1: wm1,
          wy0: wy0,
          wy1: wy1,
          wy2: wy2,
          wy3: wy3,

          e0_0: emp0_arr[0],
          e0_1: emp0_arr[1],
          e0_2: emp0_arr[2],
          e0_3: emp0_arr[3],
          e0_4: emp0_arr[4],
          e0_5: emp0_arr[5],
          e0_6: emp0_arr[6],
          e0_7: emp0_arr[7],
          e0_8: emp0_arr[8],
          e0_9: emp0_arr[9],
          e0_10: emp0_arr[10],
          e0_11: emp0_arr[11],
          e0_12: emp0_arr[12],
          e0_13: emp0_arr[13],
          e0_14: emp0_arr[14],
          e0_15: emp0_arr[15],
          e0_16: emp0_arr[16],
          e0_17: emp0_arr[17],
          e0_18: emp0_arr[18],
          e0_19: emp0_arr[19],

          e1_0: emp1_arr[0],
          e1_1: emp1_arr[1],
          e1_2: emp1_arr[2],
          e1_3: emp1_arr[3],
          e1_4: emp1_arr[4],
          e1_5: emp1_arr[5],
          e1_6: emp1_arr[6],
          e1_7: emp1_arr[7],
          e1_8: emp1_arr[8],
          e1_9: emp1_arr[9],
          e1_10: emp1_arr[10],
          e1_11: emp1_arr[11],
          e1_12: emp1_arr[12],
          e1_13: emp1_arr[13],
          e1_14: emp1_arr[14],
          e1_15: emp1_arr[15],
          e1_16: emp1_arr[16],
          e1_17: emp1_arr[17],
          e1_18: emp1_arr[18],
          e1_19: emp1_arr[19],

          e2_0: emp2_arr[0],
          e2_1: emp2_arr[1],
          e2_2: emp2_arr[2],
          e2_3: emp2_arr[3],
          e2_4: emp2_arr[4],
          e2_5: emp2_arr[5],
          e2_6: emp2_arr[6],
          e2_7: emp2_arr[7],
          e2_8: emp2_arr[8],
          e2_9: emp2_arr[9],
          e2_10: emp2_arr[10],
          e2_11: emp2_arr[11],
          e2_12: emp2_arr[12],
          e2_13: emp2_arr[13],
          e2_14: emp2_arr[14],
          e2_15: emp2_arr[15],
          e2_16: emp2_arr[16],
          e2_17: emp2_arr[17],
          e2_18: emp2_arr[18],
          e2_19: emp2_arr[19],
          
          c0: old_cert_arr[0],
          c1: old_cert_arr[1],
          c2: old_cert_arr[2],
          c3: old_cert_arr[3],
          c4: old_cert_arr[4],
          c5: old_cert_arr[5],
          c6: old_cert_arr[6],
          c7: old_cert_arr[7],
          c8: old_cert_arr[8],
          c9: old_cert_arr[9],
          c10: old_cert_arr[10],
          c11: old_cert_arr[11],
          c12: old_cert_arr[12],
          c13: old_cert_arr[13],
          c14: old_cert_arr[14],
          c15: old_cert_arr[15],
          c16: old_cert_arr[16],
          c17: old_cert_arr[17],
          c18: old_cert_arr[18],
          c19: old_cert_arr[19],
          c20: old_cert_arr[20],
          c21: old_cert_arr[21],
          c22: old_cert_arr[22],
          c23: old_cert_arr[23],

          z0: old_fio_arr[0],
          z1: old_fio_arr[1],
          z2: old_fio_arr[2],
          z3: old_fio_arr[3],
          z4: old_fio_arr[4],
          z5: old_fio_arr[5],
          z6: old_fio_arr[6],
          z7: old_fio_arr[7],
          z8: old_fio_arr[8],
          z9: old_fio_arr[9],
          z10: old_fio_arr[10],
          z11: old_fio_arr[11],
          z12: old_fio_arr[12],
          z13: old_fio_arr[13],
          z14: old_fio_arr[14],
          z15: old_fio_arr[15],
          z16: old_fio_arr[16],
          z17: old_fio_arr[17],
          z18: old_fio_arr[18],
          z19: old_fio_arr[19],
          z20: old_fio_arr[20],
          z21: old_fio_arr[21],
          z22: old_fio_arr[22],
          z23: old_fio_arr[23],
          z24: old_fio_arr[24],
          z25: old_fio_arr[25],
          z26: old_fio_arr[26],
          z27: old_fio_arr[27],
          z28: old_fio_arr[28],
          z29: old_fio_arr[29],
          z30: old_fio_arr[30],
          z31: old_fio_arr[31],
          z32: old_fio_arr[32],
          z33: old_fio_arr[33],
          z34: old_fio_arr[34],
          z35: old_fio_arr[35],
          z36: old_fio_arr[36],
          z37: old_fio_arr[37],
          z38: old_fio_arr[38],
          z39: old_fio_arr[39],
          z40: old_fio_arr[40],
          z41: old_fio_arr[41],
          z42: old_fio_arr[42],
          z43: old_fio_arr[43],
          z44: old_fio_arr[44],
          z45: old_fio_arr[45],
          z46: old_fio_arr[46],
          z47: old_fio_arr[47],
          z48: old_fio_arr[48],
          z49: old_fio_arr[49],
          z50: old_fio_arr[50],
          z51: old_fio_arr[51],
          // emp: userInfoData.emp,
          // cert_id: userInfoData.cert_id
        });
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render();
        } catch (error) {
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
          function replaceErrors(key, value) {
            if (value instanceof Error) {
              return Object.getOwnPropertyNames(value).reduce(function (
                error,
                key
              ) {
                error[key] = value[key];
                return error;
              },
              {});
            }
            return value;
          }
          console.log(JSON.stringify({ error: error }, replaceErrors));

          if (error.properties && error.properties.errors instanceof Array) {
            const errorMessages = error.properties.errors
              .map(function (error) {
                return error.properties.explanation;
              })
              .join('\n');
            console.log('errorMessages', errorMessages);
            // errorMessages is a humanly readable message looking like this :
            // 'The tag beginning with "foobar" is unopened'
          }
          throw error;
        }
        var out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        }); //Output the document using Data-URI
        saveAs(out, `${userInfoData.fam}_zayavka.docx`);
      }
    );
    loadFile(
      '/doc_templates/data_ethalon.docx',
      function (error, content) {
        if (error) {
          throw error;
        }
        var zip = new PizZip(content);
        var doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
        doc.setData({
          emp: userInfoData.emp,
          pass_long: userInfoData.pass_long,
          fam: userInfoData.fam,
          nam: userInfoData.name,
          sub: userInfoData.subname
        });
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render();
        } catch (error) {
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
          function replaceErrors(key, value) {
            if (value instanceof Error) {
              return Object.getOwnPropertyNames(value).reduce(function (
                error,
                key
              ) {
                error[key] = value[key];
                return error;
              },
              {});
            }
            return value;
          }
          console.log(JSON.stringify({ error: error }, replaceErrors));

          if (error.properties && error.properties.errors instanceof Array) {
            const errorMessages = error.properties.errors
              .map(function (error) {
                return error.properties.explanation;
              })
              .join('\n');
            console.log('errorMessages', errorMessages);
            // errorMessages is a humanly readable message looking like this :
            // 'The tag beginning with "foobar" is unopened'
          }
          throw error;
        }
        var out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        }); //Output the document using Data-URI
        saveAs(out, `${userInfoData.fam}_ecp.docx`);
      }
    );
  };