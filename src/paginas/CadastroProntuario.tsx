import { ChangeEvent, useState } from "react";
import { IProntuario } from "../Models/IProntuario";
import { Service } from "../Service";
import { Cabecalho } from "./Componentes/Cabecalho";
import { DadosConsulta } from "./Componentes/DadosConsulta";
import { CadastroPaciente } from "./CadastroPaciente";
import ReactPDF, {
  Page,
  View,
  Text,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

export const CadastroProntuario = () => {
  const onChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const objProntuario = prontuario ?? {};

    const newValue = ev.target.value;
    const field = ev.target.name;

    const newObject = {
      ...objProntuario,
      [field]: newValue,
    };

    setProntuario(newObject);
  };

  const [prontuario, setProntuario] = useState<IProntuario>();

  const registrar = async () => {
    if (
      prontuario &&
      window.confirm(
        "Deseja realmente registrar este Paciente? " +
          JSON.stringify(prontuario)
      )
    ) {
      const pdf = await ReactPDF.renderToStream(<MyDocument />);

      const chunks: any[] = [];

      pdf.on("data", (chunk: any) => {
        chunks.push(chunk);
      });

      pdf.on("end", () => {
        debugger;
        //const buffer = Buffer.concat(chunks);
        const base64String = buffer.toString("base64");
        console.log(base64String); // ou faça o que desejar com a string Base64
      });
      /*
      const p = {
        ...prontuario,
        file: ,
      };
      const res = await Service.PostProntuario(prontuario);

      if (res.status == 200)
        window.alert("Atualiazado com sucesso");
      else
          window.alert("Erro:" + JSON.stringify(err?.response?.data))
        */
    }
  };
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Anamnese: {prontuario?.anamnese} </Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <>
      <Cabecalho nomeTela="Cadastro de Protuário"> </Cabecalho>
      <div className="row">
        <div className="col-md-6" style={{ overflow: "scroll", height: 600 }}>
          <fieldset>
            <legend> Dados da Consulta </legend>
            <DadosConsulta></DadosConsulta>
          </fieldset>

          <fieldset>
            <legend> Dados do Paciente </legend>
            <CadastroPaciente></CadastroPaciente>
          </fieldset>

          <fieldset>
            <legend> Anamnese </legend>
            <textarea
              id=""
              name="anamnese"
              onChange={onChange}
              cols={100}
              rows={10}
            ></textarea>
          </fieldset>

          <fieldset>
            <legend> Prescrição Médica </legend>
            <textarea name="" id="" cols={100} rows={10}></textarea>
          </fieldset>

          <fieldset>
            <legend> Exames Prescritos/Laudos de Exames </legend>
            <textarea name="" id="" cols={100} rows={10}></textarea>
          </fieldset>

          <div className="col-12">
            <button
              id="btncontato"
              className="btn btn-info rounded-pill px-3"
              onClick={registrar}
              type="button"
            >
              <a href="PesquisarProntuario">Registrar Prontuário</a>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <PDFViewer>
            <MyDocument />
          </PDFViewer>
        </div>
      </div>
    </>
  );
};
