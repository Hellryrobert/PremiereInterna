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
  PDFDownloadLink,
  BlobProvider,
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
  const [pdf, setPdf] = useState<Blob | null>(null);
  const [visivel, setVisivel] = useState<Boolean>(false);

  const registrar = async () => {
    if (
      prontuario &&
      window.confirm(
        "Deseja realmente registrar este Paciente? " +
          JSON.stringify(prontuario)
      )
    ) {
      Service.PostProntuario({
        ...prontuario,
        file: pdf as Blob,
      });

      /*
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
      });*/
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
              disabled={!pdf || !visivel}
            >
              {" "}
              Registrar Prontuário
            </button>
            <button
              id="btncontato"
              className="btn btn-info rounded-pill px-3"
              onClick={() => {
                setVisivel(true);
              }}
              type="button"
            >
              {" "}
              Visualizar Prontuário
            </button>
          </div>
        </div>
        {visivel ? (
          <>
            <div className="col-md-6">
              <PDFViewer>
                <MyDocument styles={styles} prontuario={prontuario} />
              </PDFViewer>
            </div>
            <PDFDownloadLink
              document={<MyDocument styles={styles} prontuario={prontuario} />}
              fileName="somename.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
            </PDFDownloadLink>

            <div>
              <BlobProvider
                document={
                  <MyDocument styles={styles} prontuario={prontuario} />
                }
              >
                {({ blob, url, loading, error }) => {
                  setPdf(blob);
                  // Do whatever you need with blob here
                  return <div>There's something going on on the fly</div>;
                }}
              </BlobProvider>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
const MyDocument = ({ styles, prontuario }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Anamnese: {prontuario?.anamnese} </Text>
        <Text>Prescrição Médica: {prontuario?.prescricaoMedica} </Text>
        <Text>
          {" "}
          Exames Prescritos e Laudos de Exames: {prontuario?.examePrescritos}
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
