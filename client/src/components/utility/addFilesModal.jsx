// React
import React, { Component } from 'react';

// Material UI Components
import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// Material UI Icons
import CloseIcon from 'material-ui/svg-icons/navigation/close';

// Style
import style from '../../../../styles/utility/addFilesPopup.css';

export default class AddFilesModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this.setState({
        open: nextProps.open
      })
    }
  }

  render() {
    return (
      <Dialog
        paperClassName={style.popup_paper_container}
        contentStyle={{width: "30%", maxWidth: "none"}}
        open={this.state.open}
        onRequestClose={this.props.handleCloseDialog}
        modal={false}
      >
        <div className={style.popup_inner_container}>

          <div className={style.title}>
            Выберите предмет из списка
          </div>

          <div className={style.dropdown_outer}>
            <div className={style.dropdown_inner}>
              <DropDownMenu maxHeight={300} value={this.props.focusValue} onChange={this.props.handleChange}>
                {this.props.classes.map((item, id) => (<MenuItem value={id} key={id} primaryText={item} />))}
              </DropDownMenu>
            </div>
          </div>

          <div className={style.load_files_button}>
            + Загрузить файлы
          </div>

          <div className={style.actions_container}>

            <div className={style.actions_button}>
              Добавить
            </div>

            <div className={style.close_modal_button} onClick={this.props.handleCloseDialog}>
              <CloseIcon style={{height: '20px', width: 'auto', color: '#67428F'}}/>
            </div>

          </div>
        </div>
    </Dialog>
    )
  }
}
