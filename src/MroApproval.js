import React, {useState} from 'react';
import {
  Paper,
  Grid,
  FormControlLabel,
  Typography,
  Button,
  TextField, Checkbox, Hidden
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

//DELETE THIS LOL
const getTranslation = value => {
  return value;
}

/*TODO:
*  Pass props
*  Check colors
*  Add logic for success message
*  Check capitalization in buttons
*  Integrate save button with API
*  Show unlock checkbox if mro already approved/denied referral
*  Fetch patient values
* */
const MroApproval = props => {
  const classes = useStyles();

  const [confirmation, setConfirmation] = useState(0); // 0: none selected /1: deny positive result /2: confirm negative result
  const [note, setNote] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  return (
    <Paper elevation={1} className={classes.paper}>
      <Grid container>

        {/*Patient information section*/}
        <Hidden only={['xs']}>
          <Grid item xs={12} sm={6} md={8}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.bold}>
              {getTranslation('analysis_detail_patient_information_title')}
            </Typography>
            <div style={{marginBottom: 20}}>
              <div className={classes.patientDetailsRow}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.bold}>
                  {getTranslation('analysis_detail_patient_name_label')}
                </Typography>
                <Typography variant="subtitle2" gutterBottom className={classes.patientInfoValue}>My Name</Typography>
              </div>
              <div className={classes.patientDetailsRow}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.bold}>
                  {getTranslation('analysis_detail_patient_ssn_label')}
                </Typography>
                <Typography variant="subtitle2" gutterBottom className={classes.patientInfoValue}>My personal
                  number</Typography>
              </div>
            </div>
            <div className={classes.patientDetailsRow}>
              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.bold}>
                {getTranslation('analysis_detail_patient_phone_label')}
              </Typography>
              <Typography variant="subtitle2" gutterBottom className={classes.patientInfoValue}>My Phone</Typography>
            </div>
            <div className={classes.patientDetailsRow}>
              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.bold}>
                {getTranslation('analysis_detail_patient_email_label')}
              </Typography>
              <Typography variant="subtitle2" gutterBottom className={classes.patientInfoValue}>My Email</Typography>
            </div>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={12} md={8}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.bold}>
              {getTranslation('analysis_detail_patient_information_title')}
            </Typography>
            <Grid container style={{marginBottom: 20}}>
              <Grid item xs={12} md={2}>
                <Typography
                  variant="subtitle2"
                  className={classes.bold}>
                  {getTranslation('analysis_detail_patient_name_label')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant="subtitle2" gutterBottom>My Name</Typography>
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography
                  variant="subtitle2"
                  className={classes.bold}>
                  {getTranslation('analysis_detail_patient_ssn_label')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant="subtitle2" gutterBottom>My personal
                  number</Typography>
              </Grid>
              <Grid xs={12} md={2}>
                <Typography
                  variant="subtitle2"
                  className={classes.bold}
                >{getTranslation('analysis_detail_patient_phone_label')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant="subtitle2" gutterBottom>My Phone</Typography>
              </Grid>
              <Grid xs={12} md={2}>
                <Typography
                  variant="subtitle2"
                  className={classes.bold}>
                  {getTranslation('analysis_detail_patient_email_label')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant="subtitle2" gutterBottom>My Email</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        {/*MRO section*/}
        <Grid item xs={12} sm={6} md={4}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle2">{getTranslation('analysis_detail_mro_buttons_label')}</Typography>
            </Grid>
            <Hidden only={['xs', 'sm']}>
              <Grid item xs={12} className={classes.mroButtonsWrapper}>
                <Grid container spacing={1}>
                  <Grid item md={6}>
                    <Button
                      variant="contained"
                      color={confirmation === 1 ? 'primary' : 'secondary'}
                      onClick={() => setConfirmation(1)}
                    >
                      {getTranslation('analysis_detail_deny_button')}
                    </Button>
                  </Grid>
                  <Grid item md={6} style={{textAlign: 'right'}}>
                    <Button
                      variant="contained"
                      color={confirmation === 2 ? 'primary' : 'secondary'}
                      onClick={() => setConfirmation(2)}
                    >
                      {getTranslation('analysis_detail_confirm_button')}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={12} className={classes.mroButtonsWrapperMobile}>
                <div className={classes.textAlignCenter}>
                  <Button
                    variant="contained"
                    color={confirmation === 1 ? 'primary' : 'secondary'}
                    className={classes.mroButtonsMobile}
                    onClick={() => setConfirmation(1)}
                    style={{marginBottom: 10}}
                  >
                    {getTranslation('analysis_detail_deny_button')}
                  </Button>
                </div>
                <div className={classes.textAlignCenter}>
                  <Button
                    variant="contained"
                    color={confirmation === 2 ? 'primary' : 'secondary'}
                    className={classes.mroButtonsMobile}
                    onClick={() => setConfirmation(2)}
                  >
                    {getTranslation('analysis_detail_confirm_button')}
                  </Button>
                </div>
              </Grid>
            </Hidden>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>{getTranslation('analysis_detail_reason_label')}</Typography>
              <TextField
                variant='outlined'
                multiline
                rows={2}
                className={classes.notesInput}
                InputProps={{
                  className: classes.notesFieldInputProps
                }}
                value={note}
                disabled={!unlocked}
                onChange={e => setNote(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.mroSaveWrapper}>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={unlocked}
                        onChange={e => setUnlocked(e.target.checked)}
                        name='unlocked'
                        size='small'
                      />
                    }
                    label={<Typography
                      variant='subtitle2'>{getTranslation('analysis_detail_mro_checkbox_label')}</Typography>}
                  />
                  <Typography variant='body2' className={classes.savedMroConfirmationText}>
                    {getTranslation('analysis_detail_mro_success_message')}
                  </Typography>
                </div>
                <div>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={() => {
                    }}
                  >
                    {getTranslation('generic_button_cancel')}
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
  },
  bold: {
    fontWeight: 'bold'
  },
  notesInput: {
    width: '100%'
  },
  notesFieldInputProps: {
    padding: 10
  },
  mroSaveWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10
  },
  savedMroConfirmationText: {
    color: '#28a745'
  },
  patientDetailsRow: {
    display: 'flex'
  },
  patientInfoValue: {
    marginLeft: 5
  },
  mroButtonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  mroButtonsWrapperMobile: {
    marginTop: 5
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  mroButtonsMobile: {
    width: 180,
    marginBottom: 10,
  }
}));

export default MroApproval;