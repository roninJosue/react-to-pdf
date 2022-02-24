import {Document, Page, View, Text} from "@react-pdf/renderer";

const Invoice = () => (
  <Document>
    <Page size='A4'>
      <View>
        <Text>Example</Text>
      </View>
    </Page>
  </Document>
)

export default Invoice