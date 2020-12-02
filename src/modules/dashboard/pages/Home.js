import React, { createRef, Component } from 'react';
import { connect } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import { Form, reduxForm } from 'redux-form';
import Papa from 'papaparse';
import { setCsvData, resetCsvData, startImport } from '../actions/home.actions';
import ResourceList from '../../../components/ResourceList';
import Select from '../../../components/Forms/Select';
import TextField from '../../../components/Forms/TextField';
import SubmitButton from '../../../components/Forms/SubmitButton';

class Home extends Component {
  constructor(props) {
    super(props);

    this.fileRef = createRef();

    this.parserOption = {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        props.setCsvData(result.data);
      },
      transform: (value) => {
        if (!value) {
          return "";
        }

        return value;
      },
    };
  }

  hanldeFileChange = () => {
    this.props.resetCsvData();
    const file = this.fileRef.current.files[0];
    Papa.parse(file, this.parserOption);
  };

  render() {
    // const { headings } = this.state;
    const { handleSubmit, csvData } = this.props;
    const headings = Object.keys(csvData[0] || {}).map((key) => ({
      key,
      label: key,
      value: key,
    }));
    const options = [
      ...headings,
      {
        label: "Random String",
        value: "random",
      },
    ];

    return (
      <Box p={2}>
        <input
          type="file"
          onChange={this.hanldeFileChange}
          accept=".csv"
          ref={this.fileRef}
        />
        {Boolean(csvData.length) && (
          <>
            <Box p={2}>
              <ResourceList rowData={csvData} headings={headings} />
            </Box>
            <Form onSubmit={handleSubmit}>
              <Box p={1}>
                <FormLabel>Select Id Field</FormLabel>
                <Select
                  name="idField"
                  options={options}
                  placeholder="Select an id feild"
                />
              </Box>
              <Box p={1} marginBottom={2}>
                <FormLabel>Collection Path</FormLabel>
                <TextField name="path" placeholder="Type a collection path" />
              </Box>
              <SubmitButton>Proceed</SubmitButton>
            </Form>
          </>
        )}
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  csvData: state.dashboard.home.csvData,
});

const mapDispatchToProps = {
  setCsvData,
  startImport,
  resetCsvData,
};

const formConnected = reduxForm({
  form: 'main',
  validate: (values) => {
    const errors = {};

    if (!values.idField) {
      errors.idField = 'Required';
    }

    if (!values.path) {
      errors.path = 'Required';
    }

    return errors;
  },
  onSubmit: (formValues, action, props) => {
    props.startImport(formValues.idField, formValues.path, props.csvData);
  },
})(Home);

export default connect(mapStateToProps, mapDispatchToProps)(formConnected);
