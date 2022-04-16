import {
  Box,
  Button,
  Card,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import useTitle from '../hooks/useTitle';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LightTextField from '../components/LightTextField';
import { FC } from 'react';
import FlexBox from '../components/FlexBox';
import { t } from 'i18next';
import * as React from 'react';
import { IMaskInput } from 'react-imask';
import router from 'next/router';
import { format } from 'date-fns';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const maskCPFCNPJ = React.forwardRef<HTMLElement, CustomProps>(
  function maskCPFCNPJ(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask={"000.000.000-00","00.000.000/0000-00"}
        definitions={{
          '#': /[1-9]/,
        }}
        //InputRef = {ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

const maskDt = React.forwardRef<HTMLElement, CustomProps>(function maskDt(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask="[00]{/}[00]{/}[0000]"
      definitions={{
        '#': /[0-9]/,
      }}
      //InputRef = {ref}
      onAccept={(value: any) =>
        onChange({ target: { name: props.name, value } })
      }
      overwrite
    />
  );
});

const anamnese: FC<> = () => {
  const initialValues = {
    cpf: '',
    nome: '',
    dataInternacao: '',
    responsavelInternacao: '',
    tratamentoMedico: '',
    especialidade: '',
    porQue: '',
    medicamentos: '',
    medicamentosTipo: '',
    tontura: '',
    tentativaSuicidio: '',
    QuemidadeSono: '',
    comendo: '',
    agua: '',
    deficiencia: '',
    deficienciaQuem: '',
    agressividade: '',
    agressividadeQuem: '',
    alcoolismo: '',
    alcoolismoQuem: '',
    drogas: '',
    drogasQuem: '',
    suicidio: '',
    suicidioQuem: '',
    drogasUsos: '',
    idadeinicioUso: '',
    circunstancias: '',
    quantidade: '',
    quantidadeAntesInternar: '',
    respostaPrejuisoDrogas: '',
    quaisPrejuisos: '',
    drogasPreferencia: '',
    substanciasAssociadaUso: '',
    efeitoEsperado: '',
    efeitoInesperado: '',
    sintomasAbstinecia: '',
    internacaoAtual: '',
    internacaoAnterior: '',
    numeroInternacoes: '',
    lembrancaMarcante: '',
    arrependimento: '',
    cometeuCrime: '',
    motivoCrime: '',
    motivoDrogas: '',
    disponibilidadeTratamento: '',
    nivelAbstinencia: '',
    esperaInternacao: '',
    expectativaSocial: '',
    breveRelato: '',
  };

  const fieldValidationSchema = Yup.object().shape({
    nome: Yup.string()
      .min(3, 'Nome muito curto')
      .required('Campo obrigatório!'),
    dataInternacao: Yup.string().required('Campo obrigatório!'),
  });

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: fieldValidationSchema,
    onSubmit: (values) => {
      const dtInsercao = {
        dtInsercao: format(new Date(), 'dd-MM-yyyy HH:mm:ss'),
      };
      const reavaliacao = Object.assign(values, dtInsercao);
      console.log(reavaliacao);
    },
  });
  if (values.nome) {
    useTitle('Reavaliação - ' + values.nome);
  } else {
    useTitle('Reavaliação');
  }

  return (
    <Card sx={{ padding: '1.5rem', pb: '4rem' }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">1 - Dados Pessoais</Typography>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="cpf"
            label="cpf ou cnpj"
            value={values.cpf}
            onChange={handleChange}
            helperText={touched.cpf && errors.cpf}
            error={Boolean(touched.cpf && errors.cpf)}
            InputProps={{
              inputComponent: maskCPFCNPJ as any,
            }}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="nome"
            label="Nome"
            value={values.nome}
            onChange={handleChange}
            helperText={touched.nome && errors.nome}
            error={Boolean(touched.nome && errors.nome)}
          />
        </FlexBox>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <LightTextField
              fullWidth
              name="dataInternacao"
              label="Data de Internacao"
              value={values.dataInternacao}
              onChange={handleChange}
              InputProps={{
                inputComponent: maskDt as any,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LightTextField
              fullWidth
              name="responsavelInternacao"
              label="Responsável pela internação:"
              value={values.responsavelInternacao}
              onChange={handleChange}
              helperText={
                touched.responsavelInternacao && errors.responsavelInternacao
              }
              error={Boolean(
                touched.responsavelInternacao && errors.responsavelInternacao,
              )}
            />
          </Grid>
        </Grid>
        <br />
        <Typography variant="h5">1 - Saúde Geral</Typography>

        <Box my="1rem">
          <Typography variant="h6">
            {t(
              'During the past 2 years, have you received any medical treatment?',
            )}
          </Typography>
          <RadioGroup row name="tratamentoMedico" onChange={handleChange}>
            <FormControlLabel value="N" control={<Radio />} label={t('no')} />
            <FormControlLabel value="Y" control={<Radio />} label={t('yes')} />
          </RadioGroup>
        </Box>
        {values.tratamentoMedico === 'Y' ? (
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <LightTextField
                fullWidth
                name="especialidade"
                label="Em que especialidade?"
                value={values.especialidade}
                onChange={handleChange}
                helperText={touched.especialidade && errors.especialidade}
                error={Boolean(touched.especialidade && errors.especialidade)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LightTextField
                fullWidth
                name="porQue"
                label="Por quê?"
                value={values.porQue}
                onChange={handleChange}
                helperText={touched.porQue && errors.porQue}
                error={Boolean(touched.porQue && errors.porQue)}
              />
            </Grid>
          </Grid>
        ) : null}

        <Box my="1rem">
          <Typography variant="h6">
            {t('Do you take any medications?')}
          </Typography>
          <RadioGroup row name="medicamentos" onChange={handleChange}>
            <FormControlLabel value="N" control={<Radio />} label={t('no')} />
            <FormControlLabel value="Y" control={<Radio />} label={t('yes')} />
          </RadioGroup>
        </Box>
        {values.medicamentos === 'Y' ? (
          <FlexBox
            my="1.5rem"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <LightTextField
              fullWidth
              name="medicamentosTipo"
              label="Quais?"
              value={values.medicamentosTipo}
              onChange={handleChange}
              helperText={touched.medicamentosTipo && errors.medicamentosTipo}
              error={Boolean(
                touched.medicamentosTipo && errors.medicamentosTipo,
              )}
            />
          </FlexBox>
        ) : null}
        <Box my="1rem">
          <Typography variant="h6">
            {t('Do you often feel dizzy or faint?')}
          </Typography>
          <RadioGroup row name="tontura" onChange={handleChange}>
            <FormControlLabel value="N" control={<Radio />} label={t('no')} />
            <FormControlLabel value="Y" control={<Radio />} label={t('yes')} />
          </RadioGroup>
        </Box>

        <Box my="1rem">
          <Typography variant="h6">
            {t('Suicide thoughts or attempts?')}
          </Typography>
          <RadioGroup row name="tentativaSuicidio" onChange={handleChange}>
            <FormControlLabel value="N" control={<Radio />} label={t('no')} />
            <FormControlLabel value="Y" control={<Radio />} label={t('yes')} />
          </RadioGroup>
        </Box>
        <Box my="1rem">
          <Typography variant="h6">{t('Sleep Quemity')}</Typography>
          <RadioGroup row name="QuemidadeSono" onChange={handleChange}>
            <FormControlLabel value="W" control={<Radio />} label={t('Well')} />
            <FormControlLabel
              value="R"
              control={<Radio />}
              label={t('Regular')}
            />
            <FormControlLabel value="B" control={<Radio />} label={t('Bad')} />
          </RadioGroup>
        </Box>
        <Box my="1rem">
          <Typography variant="h6">{t('Are you eating:')}</Typography>
          <RadioGroup row name="comendo" onChange={handleChange}>
            <FormControlLabel value="W" control={<Radio />} label={t('Well')} />
            <FormControlLabel
              value="R"
              control={<Radio />}
              label={t('Regular')}
            />
            <FormControlLabel value="B" control={<Radio />} label={t('Bad')} />
          </RadioGroup>
        </Box>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="agua"
            label={t('Water intake (glasses/day):')}
            value={values.agua}
            onChange={handleChange}
            helperText={touched.agua && errors.agua}
            error={Boolean(touched.agua && errors.agua)}
          />
        </FlexBox>
        <Typography variant="h5">
          {t('2 - Family Background (first degree):')}
        </Typography>
        <div>
          <Box my="1rem">
            <Typography variant="h6">
              {t('Physical/Mental Disability:')}
            </Typography>
            <RadioGroup row name="deficiencia" onChange={handleChange}>
              <FormControlLabel value="N" control={<Radio />} label={t('no')} />
              <FormControlLabel
                value="Y"
                control={<Radio />}
                label={t('yes')}
              />
            </RadioGroup>
          </Box>
          {values.deficiencia === 'Y' ? (
            <FlexBox
              my="1.5rem"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <LightTextField
                fullWidth
                name="deficienciaQuem"
                label={t('Who')}
                value={values.deficienciaQuem}
                onChange={handleChange}
                helperText={touched.deficienciaQuem && errors.deficienciaQuem}
                error={Boolean(
                  touched.deficienciaQuem && errors.deficienciaQuem,
                )}
              />
            </FlexBox>
          ) : null}
        </div>
        <div>
          <Box my="1rem">
            <Typography variant="h6">{t('Aggressiveness?')}</Typography>
            <RadioGroup row name="agressividade" onChange={handleChange}>
              <FormControlLabel value="N" control={<Radio />} label={t('no')} />
              <FormControlLabel
                value="Y"
                control={<Radio />}
                label={t('yes')}
              />
            </RadioGroup>
          </Box>
          {values.agressividade === 'Y' ? (
            <FlexBox
              my="1.5rem"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <LightTextField
                fullWidth
                name="agressividadeQuem"
                label={t('Who')}
                value={values.agressividadeQuem}
                onChange={handleChange}
                helperText={
                  touched.agressividadeQuem && errors.agressividadeQuem
                }
                error={Boolean(
                  touched.agressividadeQuem && errors.agressividadeQuem,
                )}
              />
            </FlexBox>
          ) : null}
        </div>
        <div>
          <Box my="1rem">
            <Typography variant="h6">{t('Alcoholism?')}</Typography>
            <RadioGroup row name="alcoolismo" onChange={handleChange}>
              <FormControlLabel value="N" control={<Radio />} label={t('no')} />
              <FormControlLabel
                value="Y"
                control={<Radio />}
                label={t('yes')}
              />
            </RadioGroup>
          </Box>
          {values.alcoolismo === 'Y' ? (
            <FlexBox
              my="1.5rem"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <LightTextField
                fullWidth
                name="alcoolismoQuem"
                label={t('Who')}
                value={values.alcoolismoQuem}
                onChange={handleChange}
                helperText={touched.alcoolismoQuem && errors.alcoolismoQuem}
                error={Boolean(touched.alcoolismoQuem && errors.alcoolismoQuem)}
              />
            </FlexBox>
          ) : null}
        </div>
        <div>
          <Box my="1rem">
            <Typography variant="h6">{t('Drugs?')}</Typography>
            <RadioGroup row name="drogas" onChange={handleChange}>
              <FormControlLabel value="N" control={<Radio />} label={t('no')} />
              <FormControlLabel
                value="Y"
                control={<Radio />}
                label={t('yes')}
              />
            </RadioGroup>
          </Box>
          {values.drogas == 'Y' ? (
            <FlexBox
              my="1.5rem"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <LightTextField
                fullWidth
                name="drogasQuem"
                label={t('Who')}
                value={values.drogasQuem}
                onChange={handleChange}
                helperText={touched.drogasQuem && errors.drogasQuem}
                error={Boolean(touched.drogasQuem && errors.drogasQuem)}
              />
            </FlexBox>
          ) : null}
        </div>
        <div>
          <Box my="1rem">
            <Typography variant="h6">{t('Suicide?')}</Typography>
            <RadioGroup row name="suicidio" onChange={handleChange}>
              <FormControlLabel value="N" control={<Radio />} label={t('no')} />
              <FormControlLabel
                value="Y"
                control={<Radio />}
                label={t('yes')}
              />
            </RadioGroup>
          </Box>
          {values.suicidio === 'Y' ? (
            <FlexBox
              my="1.5rem"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <LightTextField
                fullWidth
                name="suicidioQuem"
                label={t('Who')}
                value={values.suicidioQuem}
                onChange={handleChange}
                helperText={touched.suicidioQuem && errors.suicidioQuem}
                error={Boolean(touched.suicidioQuem && errors.suicidioQuem)}
              />
            </FlexBox>
          ) : null}
        </div>

        <Typography variant="h5">
          {t('3 - History of psychoactive substance use')}
        </Typography>

        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="drogasUsos"
            label={'Quais substâncias psicoativas já fez uso?'}
            value={values.drogasUsos}
            onChange={handleChange}
            helperText={touched.drogasUsos && errors.drogasUsos}
            error={Boolean(touched.drogasUsos && errors.drogasUsos)}
          />
        </FlexBox>

        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="idadeinicioUso"
            label={'Com que idade iniciou o uso?'}
            value={values.idadeinicioUso}
            onChange={handleChange}
            helperText={touched.idadeinicioUso && errors.idadeinicioUso}
            error={Boolean(touched.idadeinicioUso && errors.idadeinicioUso)}
          />
        </FlexBox>

        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="circunstancias"
            label={'Em que circunstancias?'}
            value={values.circunstancias}
            onChange={handleChange}
            helperText={touched.circunstancias && errors.circunstancias}
            error={Boolean(touched.circunstancias && errors.circunstancias)}
          />
        </FlexBox>

        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="quantidade"
            label={'Em que quantidade?'}
            value={values.quantidade}
            onChange={handleChange}
            helperText={touched.quantidade && errors.quantidade}
            error={Boolean(touched.quantidade && errors.quantidade)}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="quantidadeAntesInternar"
            label={'Em quantidade usava antes da internação?'}
            value={values.quantidadeAntesInternar}
            onChange={handleChange}
            helperText={
              touched.quantidadeAntesInternar && errors.quantidadeAntesInternar
            }
            error={Boolean(
              touched.quantidadeAntesInternar && errors.quantidadeAntesInternar,
            )}
          />
        </FlexBox>

        <div>
          <Box my="1rem">
            <Typography variant="h6">
              Você acredita que o uso de drogas e/ou álcool trouxe prejuízos a
              sua vida?
            </Typography>
            <RadioGroup
              row
              name="respostaPrejuisoDrogas"
              onChange={handleChange}
            >
              <FormControlLabel value="N" control={<Radio />} label={t('no')} />
              <FormControlLabel
                value="Y"
                control={<Radio />}
                label={t('yes')}
              />
            </RadioGroup>
          </Box>
          {values.respostaPrejuisoDrogas === 'Y' ? (
            <FlexBox
              my="1.5rem"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <LightTextField
                fullWidth
                name="quaisPrejuisos"
                label="Quais Prejuisos?"
                value={values.quaisPrejuisos}
                onChange={handleChange}
                helperText={touched.quaisPrejuisos && errors.quaisPrejuisos}
                error={Boolean(touched.quaisPrejuisos && errors.quaisPrejuisos)}
              />
            </FlexBox>
          ) : null}
        </div>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="drogasPreferencia"
            label="Drogas de preferência"
            value={values.drogasPreferencia}
            onChange={handleChange}
            helperText={touched.drogasPreferencia && errors.drogasPreferencia}
            error={Boolean(
              touched.drogasPreferencia && errors.drogasPreferencia,
            )}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="substanciasAssociadaUso"
            label="Substâncias associadas ao uso"
            value={values.substanciasAssociadaUso}
            onChange={handleChange}
            helperText={
              touched.substanciasAssociadaUso && errors.substanciasAssociadaUso
            }
            error={Boolean(
              touched.substanciasAssociadaUso && errors.substanciasAssociadaUso,
            )}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="efeitoEsperado"
            label="Efeito esperado"
            value={values.efeitoEsperado}
            onChange={handleChange}
            helperText={touched.efeitoEsperado && errors.efeitoEsperado}
            error={Boolean(touched.efeitoEsperado && errors.efeitoEsperado)}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="efeitoInesperado"
            label="Efeito indesejado"
            value={values.efeitoInesperado}
            onChange={handleChange}
            helperText={touched.efeitoInesperado && errors.efeitoInesperado}
            error={Boolean(touched.efeitoInesperado && errors.efeitoInesperado)}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="sintomasAbstinecia"
            label="Sintomas da abstinência"
            value={values.sintomasAbstinecia}
            onChange={handleChange}
            helperText={touched.sintomasAbstinecia && errors.sintomasAbstinecia}
            error={Boolean(
              touched.sintomasAbstinecia && errors.sintomasAbstinecia,
            )}
          />
        </FlexBox>
        <Box my="1rem">
          <Typography variant="h6">Atual internação:</Typography>
          <RadioGroup row name="internacaoAtual" onChange={handleChange}>
            <FormControlLabel
              value="V"
              control={<Radio />}
              label="Voluntária"
            />
            <FormControlLabel
              value="I"
              control={<Radio />}
              label="Involuntária"
            />
          </RadioGroup>
        </Box>
        <Box my="1rem">
          <Typography variant="h6">Internações anteriores:</Typography>
          <RadioGroup row name="internacaoAnterior" onChange={handleChange}>
            <FormControlLabel value="N" control={<Radio />} label={t('no')} />
            <FormControlLabel value="Y" control={<Radio />} label={t('yes')} />
          </RadioGroup>
        </Box>
        {values.internacaoAnterior === 'Y' ? (
          <FlexBox
            my="1.5rem"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <LightTextField
              fullWidth
              name="numeroInternacoes"
              label="Por quantas internações passou"
              value={values.numeroInternacoes}
              onChange={handleChange}
              helperText={touched.numeroInternacoes && errors.numeroInternacoes}
              error={Boolean(
                touched.numeroInternacoes && errors.numeroInternacoes,
              )}
            />
          </FlexBox>
        ) : null}
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="lembrancaMarcante"
            label="Quem a lembrança mais marcante em sua vida"
            value={values.lembrancaMarcante}
            onChange={handleChange}
            helperText={touched.lembrancaMarcante && errors.lembrancaMarcante}
            error={Boolean(
              touched.lembrancaMarcante && errors.lembrancaMarcante,
            )}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="arrependimento"
            label="Tem algum arrependimento ou frustração"
            value={values.arrependimento}
            onChange={handleChange}
            helperText={touched.arrependimento && errors.arrependimento}
            error={Boolean(touched.arrependimento && errors.arrependimento)}
          />
        </FlexBox>
        <Box my="1rem">
          <Typography variant="h6">Já cometeu algum crime ?</Typography>
          <RadioGroup row name="cometeuCrime" onChange={handleChange}>
            <FormControlLabel value="N" control={<Radio />} label={t('no')} />
            <FormControlLabel value="Y" control={<Radio />} label={t('yes')} />
          </RadioGroup>
        </Box>
        {values.cometeuCrime === 'Y' ? (
          <FlexBox
            my="1.5rem"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <LightTextField
              fullWidth
              name="motivoCrime"
              label="Motivado por:"
              value={values.motivoCrime}
              onChange={handleChange}
              helperText={touched.motivoCrime && errors.motivoCrime}
              error={Boolean(touched.motivoCrime && errors.motivoCrime)}
            />
          </FlexBox>
        ) : null}
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="motivoDrogas"
            label="O que você considera ter te levado ao uso de substâncias
            psicoativas?"
            value={values.motivoDrogas}
            onChange={handleChange}
            helperText={touched.motivoDrogas && errors.motivoDrogas}
            error={Boolean(touched.motivoDrogas && errors.motivoDrogas)}
          />
        </FlexBox>
        <Box my="1rem">
          <Typography variant="h6">Disponibilidade Para Tratamento:</Typography>
          <RadioGroup
            row
            name="disponibilidadeTratamento"
            onChange={handleChange}
          >
            <FormControlLabel value="N" control={<Radio />} label={t('no')} />
            <FormControlLabel value="Y" control={<Radio />} label={t('yes')} />
          </RadioGroup>
        </Box>
        <Box my="1rem">
          <Typography variant="h6">Nível de abstinência:</Typography>
          <RadioGroup row name="nivelAbstinencia" onChange={handleChange}>
            <FormControlLabel value="L" control={<Radio />} label={'Baixo'} />
            <FormControlLabel value="M" control={<Radio />} label={'Médio'} />
            <FormControlLabel value="H" control={<Radio />} label={'Alto'} />
          </RadioGroup>
        </Box>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="esperaInternacao"
            label="O que espera da internação?"
            value={values.esperaInternacao}
            onChange={handleChange}
            helperText={touched.esperaInternacao && errors.esperaInternacao}
            error={Boolean(touched.esperaInternacao && errors.esperaInternacao)}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="expectativaSocial"
            label="Quem a expectativa da reinserção familiar e social?"
            value={values.expectativaSocial}
            onChange={handleChange}
            helperText={touched.expectativaSocial && errors.expectativaSocial}
            error={Boolean(
              touched.expectativaSocial && errors.expectativaSocial,
            )}
          />
        </FlexBox>
        <FlexBox
          my="1.5rem"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LightTextField
            fullWidth
            name="breveRelato"
            label="Breve relato sobre fatores agravantes, atenuantes e manifestações
            mais relevantes que foram observadas durante a entrevista."
            value={values.breveRelato}
            onChange={handleChange}
            helperText={touched.breveRelato && errors.breveRelato}
            error={Boolean(touched.breveRelato && errors.breveRelato)}
          />
        </FlexBox>
        <br />
        <br />
        <FlexBox justifyContent="space-between" alignItems="center">
          <Button
            variant="outlined"
            sx={{
              width: 124,
              color: 'text.disabled',
              borderColor: 'text.disabled',
            }}
            fullWidth
            onClick={() => router.back()}
          >
            {t('Cancel')}
          </Button>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ width: 124 }}
          >
            {t('Save')}
          </Button>
        </FlexBox>
      </form>
    </Card>
  );
};

export default anamnese;
