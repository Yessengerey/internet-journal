// React
import React, { Component } from 'react';

// Custom Components
import DataGrid from '../../components/utility/datagrid.jsx';
import AddFilesModal from '../../components/utility/addFilesModal.jsx';

// Material UI Components
import DownloadIcon from 'material-ui/svg-icons/file/file-download';

// Style
import style from '../../../../styles/teachers/syllabus.css';

const downloadFilesElement = <div className={style.download_element}><DownloadIcon style={{height: '17px'}}/> Скачать Файлы</div>;

export default class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          {readOnly: true, value: '№', width: 40},
          {value: 'Предмет', readOnly: true, width: 150},
          {value: 'Учитель/Кабинет', readOnly: true, width: 180},
          {value: 'Файлы', readOnly: true, width: 250}
        ],
          [{value: 1}, {value: 'Математика'}, {value: ''}, {disableEvents: true, component: downloadFilesElement, forceComponent: true}],
          [{value: 2}, {value: 'Литература'}, {value: ''}, {disableEvents: true, component: downloadFilesElement, forceComponent: true}],
          [{value: 3}, {value: 'Биология'}, {value: ''}, {disableEvents: true, component: downloadFilesElement, forceComponent: true}],
          [{value: 4}, {value: 'Черчение'}, {value: ''}, {disableEvents: true, component: downloadFilesElement, forceComponent: true}],
          [{value: 5}, {value: 'Английский'}, {value: ''}, {disableEvents: true, component: downloadFilesElement, forceComponent: true}],
          [{value: 6}, {value: 'Физика'}, {value: ''}, {disableEvents: true, component: downloadFilesElement, forceComponent: true}],
          [{value: 7}, {value: 'Физкультура'}, {value: ''}, {disableEvents: true, component: downloadFilesElement, forceComponent: true}],
          [{value: 8}, {value: 'Казахский'}, {value: ''}, {disableEvents: true, component: downloadFilesElement, forceComponent: true}],
          [{value: 9}, {value: 'Русский'}, {value: ''}, {value: ''}],
          [{value: 10}, {value: 'География'}, {value: ''}, {value: ''}],
          [{value: 11}, {value: 'Технологии'}, {value: ''}, {value: ''}],
          [{value: 12}, {value: 'Искусство'}, {value: ''}, {value: ''}],
          [{value: 13}, {value: 'История М.'}, {value: ''}, {value: ''}],
          [{value: 14}, {value: 'История К.'}, {value: ''}, {value: ''}],
          [{value: 15}, {value: 'Литература К.'}, {value: ''}, {value: ''}],
          [{value: 16}, {value: 'Музыка'}, {value: ''}, {value: ''}],
          [{value: 17}, {value: 'Химия'}, {value: ''}, {value: ''}],
          [{value: 18}, {value: 'Французский'}, {value: ''}, {value: ''}],
          [{value: 19}, {value: 'Проф'}, {value: ''}, {value: ''}],
          [{value: 20}, {value: 'Проф'}, {value: ''}, {value: ''}]
      ],
      gridTitle: 'Программа на',
      open: false,
      focusValue: 0,
      classes: [
        'Математика',
        'Литература',
        'Биология',
        'Черчение',
        'Английский',
        'Физика',
        'Физкультура',
        'Казахский',
        'Русский',
        'География',
        'Технологии',
        'Искусство',
        'История',
        'Литература',
        'Музыка',
        'Химия',
        'Французский',
        'Проф'
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
  }

  handleChange(e, index, value) {
    this.setState({
      focusValue: value
    })
  }

  handleCloseDialog() {
    this.setState({
      open: false
    })
  }

  handleOpenDialog() {
    this.setState({
      open: true
    })
  }

  render() {
    return (
      <div>
        <div className={style.add_file_button_container}>
          <div className={style.add_file_button} onClick={this.handleOpenDialog}>
            + Добавить файл
          </div>
        </div>
        <DataGrid
          title={this.state.gridTitle}
          type={'syllabus'}
          numberedRows={true}
          width={'70%'}
          dropDownItems={this.props.quarters}
          data={this.state.data}/>
        <AddFilesModal
          open={this.state.open}
          classes={this.state.classes}
          handleCloseDialog={this.handleCloseDialog}
          focusValue={this.state.focusValue}
          handleChange={this.handleChange}/>
      </div>
    )
  }
}
